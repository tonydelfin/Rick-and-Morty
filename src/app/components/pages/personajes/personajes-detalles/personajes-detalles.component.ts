import { Component, OnInit } from '@angular/core';
import { Episode, Personaje } from '@app/components/interfaces/personaje.interface';
import { Observable, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../../../shared/services/personajes.service';

@Component({
  selector: 'app-personajes-detalles',
  templateUrl: './personajes-detalles.component.html',
  styleUrls: ['./personajes-detalles.component.scss']
})
export class PersonajesDetallesComponent implements OnInit {

  personaje$!: Observable<Personaje>;
  episodio!: Observable<Episode>;
  
  constructor(private route: ActivatedRoute, 
              private personajeService: PersonajesService, 
              )
              
              {}
  ngOnInit(): void {
    this.route.params.pipe(take(1))
    .subscribe(params=>{
      const id = params['id'];
      this.personaje$ = this.personajeService.getDetalles(id);
    })
    
  }
  btnVolver(){
    window.history.back();
  }

}
