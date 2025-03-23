import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdnanService {

  constructor(private _url: HttpClient) { }

  postNewVoucher(data: any): Observable<any> {
    return this._url.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data);
  }

  getAllVouchers(): Observable<any> {
    return this._url.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }

  edieVoucher(id: any, data: any): Observable<any> {
    return this._url.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data);

  }

  getVoucherByVoucherId(id: any): Observable<any> {
    return this._url.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`);
  }


}  
