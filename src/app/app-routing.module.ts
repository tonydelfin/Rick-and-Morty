import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)

  }, 
  { path: 'personajes-lista', loadChildren: () => import('./components/pages/personajes/personajes-lista/personajes-lista.module').then(m => m.PersonajesListaModule) 

  }, 
  
  { path: 'personajes-detalles/:id', loadChildren: () => import('./components/pages/personajes/personajes-detalles/personajes-detalles.module').then(m => m.PersonajesDetallesModule) 

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
