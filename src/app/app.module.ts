import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { ProductListComponent } from './content/view/product-list/product-list.component';
import { ProductEditComponent } from './content/view/product-edit/product-edit.component';
import { ProductCateListComponent } from './content/view/product-cate-list/product-cate-list.component';
import { ProductCateEditComponent } from './content/view/product-cate-edit/product-cate-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,    
    ProductListComponent,
    ProductEditComponent,
    ProductCateListComponent,
    ProductCateEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
