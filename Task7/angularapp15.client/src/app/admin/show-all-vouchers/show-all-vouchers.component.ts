import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-show-all-vouchers',
  templateUrl: './show-all-vouchers.component.html',
  styleUrl: './show-all-vouchers.component.css'
})
export class ShowAllVouchersComponent {
  constructor(private _ser: AdnanService) { }

  vouchers: any = [];

  ngOnInit() {
    this._ser.getAllVouchers().subscribe((data) => {
      this.vouchers = data;
    });
  }

  getAllVouchers() {
    this._ser.getAllVouchers().subscribe((data) => {
      this.vouchers = data;
    });

  }
}
