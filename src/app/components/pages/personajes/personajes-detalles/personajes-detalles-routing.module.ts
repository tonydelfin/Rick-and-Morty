import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesDetallesComponent } from './personajes-detalles.component';

const routes: Routes = [{ path: '', component: PersonajesDetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesDetallesRoutingModule { }
