import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegistroComponent } from 'src/app/auth/pages/registro/registro.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LayoutPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
