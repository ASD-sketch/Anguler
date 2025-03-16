import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://67cea6ee125cd5af757b6514.mockapi.io/Users';
  private api = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.api);

  }


}
