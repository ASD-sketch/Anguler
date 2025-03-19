import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: any = [];
  products: any = [];

  constructor(private _ser: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getCategories() {
    this._ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getProducts() {
    this._ser.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  postData(data: any) {
    this._ser.postNewProduct(data).subscribe(() => {
      alert("Product added successfully!");
    });
  }

}
