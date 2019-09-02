import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master en javascript!!!';
  public mostrar_videojuegos: boolean = true;
  public descripcion: String;
  public config;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
  }

  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}
