import { Component } from '@angular/core';


//Decorador para una clase
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent{
    public titulo: String;
    public listado: String;

    constructor(){
        this.titulo = "Componente de videojuegos para angular";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componente videojuego");
    }
}