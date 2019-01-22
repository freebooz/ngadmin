import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './content/view/product-list/product-list.component';
import { ProductEditComponent } from './content/view/product-edit/product-edit.component';
import { ProductCateListComponent } from './content/view/product-cate-list/product-cate-list.component';
import { ProductCateEditComponent } from './content/view/product-cate-edit/product-cate-edit.component';
import { MainComponent } from './page/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { AuthComponent } from './page/auth/auth.component';
import { AsideRightComponent } from './layout/aside/aside-right/aside-right.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideLeftComponent } from './layout/aside/aside-left/aside-left.component';
import { TopbarComponent } from './layout/header/topbar/topbar.component';
import { NotificationComponent } from './layout/header/notification/notification.component';
import { UserProfileComponent } from './layout/header/user-profile/user-profile.component';
import { MenuSectionComponent } from './layout/aside/menu-section/menu-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCateListComponent,
    ProductCateEditComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthComponent,
    AsideRightComponent,
    FooterComponent,
    HeaderComponent,
    AsideLeftComponent,
    TopbarComponent,
    NotificationComponent,
    UserProfileComponent,
    MenuSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
