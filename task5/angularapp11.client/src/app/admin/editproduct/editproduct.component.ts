import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent implements OnInit {
  product: any = {
    name: '',
    description: '',
    price: 0,
    categoryId: null
  };
  categories: any[] = [];
  productId: number = 0;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.params['id']);
    console.log('🔹 Product ID:', this.productId);
    this.loadProduct();
    this.loadCategories();
  }

  loadProduct() {
    this.service.getProductById(this.productId).subscribe(
      (productData) => {
        console.log('✅ Product Loaded:', productData);
        if (productData) {
          this.product = productData;
        }
      },
      (error) => {
        console.error('❌ Error loading product:', error);
      }
    );
  }

  loadCategories() {
    this.service.getCategories().subscribe(
      (categoryData) => {
        console.log('✅ Categories Loaded:', categoryData);
        this.categories = categoryData;
      },
      (error) => {
        console.error('❌ Error loading categories:', error);
      }
    );
  }

  updateProduct() {
    this.service.updateProduct(this.productId, this.product).subscribe(
      () => {
        alert('✅ Product updated successfully!');
        this.router.navigate(['/dashborde/showproduct']);
      },
      (error) => {
        console.error('❌ Error updating product:', error);
      }
    );
  }
}
