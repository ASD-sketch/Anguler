import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddVoucherComponent } from './admin/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './admin/edit-voucher/edit-voucher.component';
import { ShowAllVouchersComponent } from './admin/show-all-vouchers/show-all-vouchers.component';

const routes: Routes = [
  //{
  //  path: "admin", component: DashboardComponent, children: [
  //    { path: "dashboard", component: DashboardComponent },
  //    { path: "addproduct", component: AddProductComponent },
  //    { path: "addcategory", component: AddCategoryComponent },
  //    { path: "showProduct", component: ShowProductComponent },
  //    { path: "showCategory", component: ShowCategoryComponent },
  //    { path: "editCategory/:id", component: EditCategoryComponent },
  //    { path: "editProduct/:id", component: EditProductComponent }
  //  ]
  //}
  {
    path: "admin", component: DashboardComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "addVoucher", component: AddVoucherComponent },
      { path: "editVoucher/:id", component: EditVoucherComponent },
      { path: "showVoucher", component: ShowAllVouchersComponent } 

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
