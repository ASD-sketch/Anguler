import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories'; 

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCategory(category: { name: string }): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }
}
