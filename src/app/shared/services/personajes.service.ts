import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment/environment';
import { Personaje } from '../../components/interfaces/personaje.interface';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  buscarPersonajeNombre(query: string ="", page: number =1){
    
    return this.http.get<Personaje[]>(`${environment.baseUrl}/character/?name=${query}&page=${page}`)
  
  }
  getSugerencias(query: string =""){
    
    return this.http.get<Personaje[]>(`${environment.baseUrl}/character/?name=${query}&_limit=6`)
  
  }
  buscarPersonajeEpisodio( episodio: number =1){
    
    return this.http.get<Personaje[]>(`${environment.baseUrl}/episode/${episodio}`)
  
  }
  buscarPersonajeLocation(location: number =1){
    
    return this.http.get<Location[]>(`${environment.baseUrl}/location/${location}`)
  
  }
  getDetalles(id: number){
    return this.http.get<Personaje>(`${environment.baseUrl}/character/${id}`)
  }
  
}
