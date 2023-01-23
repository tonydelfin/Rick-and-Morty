import { Component, HostListener, Inject, OnInit } from '@angular/core';

import { PersonajesService } from '../../../../shared/services/personajes.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, take } from 'rxjs';

import { Personaje } from '../../../interfaces/personaje.interface';
import {DOCUMENT} from '@angular/common'

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-personajes-lista',
  templateUrl: './personajes-lista.component.html',
  styles:[
    
  ]
})
export class PersonajesListaComponent implements OnInit{
 

 

  locaciones: Location[] =[];
  personajes: Personaje[] = [];
  info: RequestInfo ={
    next: null,

  };

  showGoUpbtn = false;

  private pageNum:number =1;
  private query:string ="";
  private locacion: number =1;

  //funciones de scroll
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor( 
    @Inject(DOCUMENT) private documento: Document,
    private personajeService: PersonajesService,
    private route: ActivatedRoute,
    private router: Router
    )
    { this.cambioUrl()}

  ngOnInit(): void {
    // this.obtenerDatosSvc();
    // this.obtenerLocationSvc();
    // this.obtenerPersoanajeBusqueda();
    
  }
  ScrollDown(): void{
    if(this.info.next){
      this.pageNum ++;
      this.obtenerDatosSvc();
    }
  }
  @HostListener('window:scroll',[])
  windowScroll(): void{
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.documento.body.scrollTop || this.documento.documentElement.scrollTop) > this.showScrollHeight)
    {
      this.showGoUpbtn = true;
    }
    else if( this.showGoUpbtn && (yOffSet || this.documento.body.scrollTop || this.documento.documentElement.scrollTop) > this.hideScrollHeight)
    {
      this.showGoUpbtn = false;
    }
  }

  ScrollUp(): void{
    this.documento.body.scrollTop = 0;
    this.documento.documentElement.scrollTop=  0;
  }

  private cambioUrl(): void{
    this.router.events
    .pipe(filter((events)=> events instanceof NavigationEnd))
    .subscribe(() =>{
      this.personajes =[];
      this.obtenerPersoanajeBusqueda();
    });
  }

  private obtenerDatosSvc(): void {
      this.personajeService.buscarPersonajeNombre(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((result: any) =>{

        if(result?.results?.length){
          console.log("resp-<", result);
          
          const {info, results} = result;
          this.personajes = [...this.personajes, ...results];
          this.info = info;
        
        }
        else{
          this.personajes = [];
        }

      })
  }
  private obtenerPersoanajeBusqueda(): void{
    this.route.queryParams.pipe(take(1)).subscribe((params)=>{
      console.log(params);
      
      this.query = params['q'];
      this.obtenerDatosSvc();
    });
  }
  // private obtenerLocationSvc(): void{
  //   this.personajeService.buscarPersonajeLocation(this.locacion)
  //   .pipe(take(1))
  //   .subscribe((resultado: any)=>{
  //     const{info, results} = resultado;
  //     this.locaciones=[...this.locaciones, ...results]
  //   }
    
  //   )
  // }

}
