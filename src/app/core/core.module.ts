import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    PageLoginComponent,
    NavbarComponent
  ],
})
export class CoreModule { }
