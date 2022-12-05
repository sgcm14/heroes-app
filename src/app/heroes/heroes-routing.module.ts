import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from 'src/app/heroes/pages/listado/listado.component';
import { AgregarComponent } from 'src/app/heroes/pages/agregar/agregar.component';
import { BuscarComponent } from 'src/app/heroes/pages/buscar/buscar.component';
import { HeroeComponent } from 'src/app/heroes/pages/heroe/heroe.component';
import { HomeComponent } from 'src/app/heroes/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        component: ListadoComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
