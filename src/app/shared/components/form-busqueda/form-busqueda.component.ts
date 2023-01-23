import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Personaje } from '../../../components/interfaces/personaje.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-form-busqueda',
  templateUrl: './form-busqueda.component.html' ,
  styles:["input{ width: 100%}"]
  
})
export class FormBusquedaComponent {

  termino:String ="";
  personajes: Personaje[] =[];

  personajeSelected: Personaje | undefined;
  

  constructor(private router: Router, private personajeService: PersonajesService){}

  buscar(){
    this.personajeService.getSugerencias(this.termino.trim())
    .subscribe(personajes=> this.personajes=personajes);
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.personajeSelected= undefined;
      return;
    }

    const Personaje:Personaje = event.option.value;
    this.termino = Personaje.name;

    this.personajeService.getDetalles(Personaje.id!)
    .subscribe(person=>this.personajeSelected = person)
  } 
  onSearch(value: string){

    if(value && value.length > 3){
    
      this.router.navigate(["/personajes-lista"], 
      {
        queryParams:{q: value},
      
      }
      );
    }
  }

}
