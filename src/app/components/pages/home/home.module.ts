import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonajesModule } from '../personajes/personajes.module';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PersonajesModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
