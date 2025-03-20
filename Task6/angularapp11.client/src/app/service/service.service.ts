import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})


export class ServiceService {
  private apiUrl = 'https://67cea6ee125cd5af757b6514.mockapi.io/Users';

  constructor(private _url: HttpClient) { }

  postNewUser(data:any): Observable<any> {
    return this._url.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this._url.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }

  updateUser(user: any): Observable<any> {
    return this._url.put(`${this.apiUrl}/${user.id}`, user);
  }
}
