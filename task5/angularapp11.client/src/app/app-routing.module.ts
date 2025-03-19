import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { ShowcatigoryComponent } from './admin/showcatigory/showcatigory.component';
import { ShowproductComponent } from './admin/showproduct/showproduct.component';
import { DashbordeComponent } from './admin/dashborde/dashborde.component';
import { TestComponent } from './test/test.component';
import { EditProductComponent } from './admin/editproduct/editproduct.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "test", component: TestComponent },
  
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
