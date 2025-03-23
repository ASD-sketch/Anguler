import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {

  constructor(private _url: AdnanService, private _active: ActivatedRoute) { }

  voucher: any;
  categoryId: any;


  ngOnInit() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._url.getVoucherByVoucherId(this.categoryId).subscribe((data) => {
      this.voucher = data;
    })
  }
  

  updateVoucher(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._url.edieVoucher(this.categoryId, data).subscribe(() => {
      alert("update successfully")
    })
  }

}
