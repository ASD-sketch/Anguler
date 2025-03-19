import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _url: HttpClient) { }

  postNewUser(data:any): Observable<any> {
    return this._url.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this._url.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }

  postNewCategory(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }

  postNewProduct(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }


  getCategories(): Observable<any> {
    return this._url.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  getProducts(): Observable<any> {
    return this._url.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data);
  }

  getProductById(id: number): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }

  getCategoryById(id: number): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }

  updateCategory(id: number, data: any): Observable<any> {
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data);
  }

}
