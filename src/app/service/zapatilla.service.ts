import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService{
    public zapatillas: Array<Zapatilla>
    constructor(){
        this.zapatillas = [
            new Zapatilla('Snake', 1000, 'Blancos', true, 'Gucci'),
            new Zapatilla('FXB', 60, 'Negros', true, 'Adidas'),
            new Zapatilla('Spartan', 60, 'Morado', true, 'Adidas'),
            new Zapatilla('AirMax', 80, 'Azul', false, "Nike")
        ];
    }

    getTexto(){
        console.log('Hola mundo desde un servicio');
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

}