import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { ShowcatigoryComponent } from './admin/showcatigory/showcatigory.component';
import { ShowproductComponent } from './admin/showproduct/showproduct.component';
import { DashbordeComponent } from './admin/dashborde/dashborde.component';
import { EditProductComponent } from './admin/editproduct/editproduct.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';

const routes: Routes = [

  
  { path: "dashborde", component: DashbordeComponent, children: [

      { path: "product", component: ProductComponent },
  { path: "category", component: CategoryComponent },
  { path: "showcatigory", component: ShowcatigoryComponent },
    { path: "showproduct", component: ShowproductComponent },
    { path: "editProduct/:id", component: EditProductComponent },
    { path: "editCategory/:id", component:EditCategoryComponent }

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
