import { Component } from '@angular/core';

@Component({
    selector: 'zapatillas', //Nuevas etiquetas para usar en HTML
    templateUrl: './zapatillas.component.html' //Hacia donde se va a pasar la información
})

export class ZapatillasComponent {
    public titulo: String; //Props que se va a exportar

    constructor(){
        this.titulo = "Componente de Zapatillas!";
    }
    
}