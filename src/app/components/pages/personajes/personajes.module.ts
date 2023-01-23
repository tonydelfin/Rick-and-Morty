import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll'

import { PersonajesDetallesComponent } from './personajes-detalles/personajes-detalles.component';
import { PersonajesListaComponent } from './personajes-lista/personajes-lista.component';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';
import { PersonajeComponent } from './personaje.component';




@NgModule({
  declarations: [
    PersonajesDetallesComponent,
    PersonajesListaComponent,
    PersonajeComponent,
    
  ],
  exports: [
    PersonajesDetallesComponent,
    PersonajesListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    InfiniteScrollModule
    
  ]
})
export class PersonajesModule { }
