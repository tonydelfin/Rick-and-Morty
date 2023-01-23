import {Component, Input, ChangeDetectionStrategy} from '@angular/core'
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'app-personaje',
    template: `<div class="">

    <mat-card class="example-card mb-4">
        <mat-card-header>
            <a [routerLink]="['/personajes-detalles', personaje.id]">
              
                <mat-card-title>{{personaje.name | titlecase }}</mat-card-title>
                <mat-card-subtitle>{{personaje.status}}</mat-card-subtitle>

            </a>
            
        </mat-card-header>
        <a [routerLink]="['/personajes-detalles', personaje.id]">

            <img mat-card-image 
            [src]="personaje.image" 
            [alt]="personaje.name"
            class="card-img-top mb-2 mt-2">
        </a>
        <mat-card-content >
          <p>
            Género: {{ personaje.gender}}
            <br>
            Fecha de Creacion: {{personaje.created | date}}
            <br>
            Origen: {{personaje.location.name}}
            <br>
            Especie: {{personaje.species}}
            <br>
            
            <mat-divider class="mt-3">
            </mat-divider>
            
          </p>
        </mat-card-content>
       
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </mat-card>
</div>`,
    changeDetection:ChangeDetectionStrategy.OnPush

})

export class PersonajeComponent{
    @Input() personaje!:Personaje;
}