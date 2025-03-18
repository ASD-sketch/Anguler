import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '', redirectTo: '/add-category', pathMatch: 'full' },
  {path:'productList',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
