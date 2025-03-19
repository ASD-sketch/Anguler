import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { ShowcatigoryComponent } from './admin/showcatigory/showcatigory.component';
import { ShowproductComponent } from './admin/showproduct/showproduct.component';
import { DashbordeComponent } from './admin/dashborde/dashborde.component';
import { EditProductComponent } from './admin/editproduct/editproduct.component';
import { TestComponent } from './test/test.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ShowcatigoryComponent,
    ShowproductComponent,
    DashbordeComponent,
    EditProductComponent,
    TestComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
