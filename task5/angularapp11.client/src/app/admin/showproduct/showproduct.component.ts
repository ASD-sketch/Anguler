import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrl: './showproduct.component.css'
})
export class ShowproductComponent {
  products: any = [];

  constructor(private _myser: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getProducts().subscribe((data) => {
      console.log("All products:", data);
      this.products = data;
    });
  }
  editProduct(productId: number) {
    this.router.navigate(['/dashborde/editProduct', productId]);  }

}
