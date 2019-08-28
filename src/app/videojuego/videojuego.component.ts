import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';


//Decorador para una clase
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: String;
    public listado: String;

    constructor(){
        this.titulo = "Componente de videojuegos para angular";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componente videojuego");
    }

    ngOnInit(){ //Hook
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){ //Se ejecuta cad vez que se produce un cambio en el componento o en la aplicación de angular
            console.log("Docheck ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

    ngOnDestroy(){
        console.log("Ondestroy ejecutado");
    }

}