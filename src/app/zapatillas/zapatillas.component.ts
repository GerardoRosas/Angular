import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../models/zapatilla';


@Component({
    selector: 'zapatillas', //Nuevas etiquetas para usar en HTML
    templateUrl: './zapatillas.component.html' //Hacia donde se va a pasar la información
})

export class ZapatillasComponent implements OnInit{

    public titulo: String; //Props que se va a exportar
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Snake', 1000, 'Blancos', true, 'Gucci'),
            new Zapatilla('FXB', 150, 'Negros', true, 'Adidas'),
            new Zapatilla('AirMax', 600, 'Azul', false, "Nike")
        ];
    }
    
    ngOnInit(){
        console.log(this.zapatillas);
    }
    
}