import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../-servicio/contenido.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { entorno } from '../-entorno/entorno';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent implements OnInit {
  contenido:string="";
  usuario:string="";

  constructor(private servicio:ContenidoService,
    public jwtHelper: JwtHelperService
  ){}

  ngOnInit(): void {

    const token = sessionStorage.getItem(entorno.TOKEN_NAME)
    let tokenDecodificado =token!==null?this.jwtHelper.decodeToken(token):null;
    this.usuario = tokenDecodificado.sub;
    
    this.servicio.obtenerContenido().subscribe(
      data => {this.contenido = data.contenido}
    )
  }

}
