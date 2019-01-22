import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './db/view/product-list/product-list.component';
import { ProductEditComponent } from './db/view/product-edit/product-edit.component';
import { ProductCateListComponent } from './db/view/product-cate-list/product-cate-list.component';
import { ProductCateEditComponent } from './db/view/product-cate-edit/product-cate-edit.component';
import { HomeComponent } from './page/home/home.component';
import { MainComponent } from './page/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCateListComponent,
    ProductCateEditComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
