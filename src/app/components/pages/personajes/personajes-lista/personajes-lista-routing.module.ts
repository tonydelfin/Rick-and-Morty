import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesListaComponent } from './personajes-lista.component';

const routes: Routes = [{ path: '', component: PersonajesListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesListaRoutingModule { }
