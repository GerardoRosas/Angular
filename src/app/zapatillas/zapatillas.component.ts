import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../models/zapatilla';


@Component({
    selector: 'zapatillas', //Nuevas etiquetas para usar en HTML
    templateUrl: './zapatillas.component.html' //Hacia donde se va a pasar la información
})

export class ZapatillasComponent implements OnInit{

    public titulo: String; //Props que se va a exportar
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];

    constructor(){
        this.titulo = "Se carga el componente Zapatillas";
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Snake', 1000, 'Blancos', true, 'Gucci'),
            new Zapatilla('FXB', 60, 'Negros', true, 'Adidas'),
            new Zapatilla('Spartan', 60, 'Morado', true, 'Adidas'),
            new Zapatilla('AirMax', 80, 'Azul', false, "Nike")
        ];
    }
    
    ngOnInit(){
        console.log(this.zapatillas);
        console.log(this.getMarcas());

    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
            //console.log(index);
        });
        console.log(this.marcas);
    }
           
}