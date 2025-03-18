import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  AddCategoty(data: any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories',data);
  }
}
