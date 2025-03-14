import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'https://fakestoreapi.com/products';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.api);

  }


  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }



}
