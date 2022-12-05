import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from 'src/app/heroes/heroes-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { AgregarComponent } from 'src/app/heroes/pages/agregar/agregar.component';
import { BuscarComponent } from 'src/app/heroes/pages/buscar/buscar.component';
import { HeroeComponent } from 'src/app/heroes/pages/heroe/heroe.component';
import { HomeComponent } from 'src/app/heroes/pages/home/home.component';
import { ListadoComponent } from 'src/app/heroes/pages/listado/listado.component';
import { HeroeTarjetaComponent } from 'src/app/heroes/components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from 'src/app/heroes/pipes/imagen.pipe';
import { ConfirmarComponent } from 'src/app/heroes/components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
