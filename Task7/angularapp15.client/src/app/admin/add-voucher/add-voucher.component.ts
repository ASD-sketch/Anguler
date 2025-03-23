import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {

  constructor(private _ser: AdnanService) { }

  ngOnInit() { }

  addVoucher(data: any) {
    this._ser.postNewVoucher(data).subscribe(() => {
      alert("Voucher added");
    });
  }
}
