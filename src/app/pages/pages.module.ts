import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { ActionComponent } from './header/action/action.component';
import { ProfileComponent } from './header/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthComponent,
    ActionComponent,
    ErrorPageComponent,
    ProfileComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    CoreModule,
  ]
})
export class PagesModule { }
