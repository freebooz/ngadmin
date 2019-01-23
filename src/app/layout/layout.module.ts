import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideRightComponent } from './aside/aside-right/aside-right.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left/aside-left.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NotificationComponent } from './header/notification/notification.component';
import { UserProfileComponent } from './header/user-profile/user-profile.component';
import { MenuSectionComponent } from './aside/menu-section/menu-section.component';

@NgModule({
  declarations: [
    AsideRightComponent,
    FooterComponent,
    HeaderComponent,
    AsideLeftComponent,
    TopbarComponent,
    NotificationComponent,
    UserProfileComponent,
    MenuSectionComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ]
})
export class LayoutModule { }
