import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from '../-modelo/contenido';
import { entorno } from '../-entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http:HttpClient) { }

  obtenerContenido():Observable<Contenido>{
    return this.http.get<Contenido>(`${entorno.HOSTNAME}/resource`)
  }
}
