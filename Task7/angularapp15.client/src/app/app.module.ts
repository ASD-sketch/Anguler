import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddVoucherComponent } from './admin/add-voucher/add-voucher.component';
import { ShowAllVouchersComponent } from './admin/show-all-vouchers/show-all-vouchers.component';
import { EditVoucherComponent } from './admin/edit-voucher/edit-voucher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddVoucherComponent,
    ShowAllVouchersComponent,
    EditVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
