import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegistroComponent } from 'src/app/auth/pages/registro/registro.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
