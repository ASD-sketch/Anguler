// src/app/components/add-product/add-product.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../serv/category.service';
import { ProductService } from '../serv/product.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: string = '';
  categories: any[] = [];
  selectedCategoryId: number | null = null;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addProduct() {
    if (this.productName.trim() && this.selectedCategoryId) {
      this.productService.addProduct({
        name: this.productName,
        categoryId: this.selectedCategoryId
      }).subscribe(() => {
        alert('Product added successfully!');
        this.productName = '';
        this.selectedCategoryId = null;
      });
    } else {
      alert('Please enter product name and select a category.');
    }
  }
}
