import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../models/zapatilla';
import { ZapatillaService } from './../service/zapatilla.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'zapatillas', //Nuevas etiquetas para usar en HTML
    templateUrl: './zapatillas.component.html', //Hacia donde se va a pasar la información
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{

    public titulo: String; //Props que se va a exportar
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;
    public mi_marca: String;


    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color = "yellow"
        this.titulo = "Se carga el componente Zapatillas";
        this.marcas = new Array();      
    }
    
    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();  //Mandas llamar al metodo que se creó en zapatillas.service
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

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice){
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1); //el 1 es que solo va a borrar un solo elemento, puede variar ese parametro
    }

    onBlur(){
        console.log("Has salido del input");
    }
    
    mostrarPalabra(){
        alert(this.mi_marca);
    }
}