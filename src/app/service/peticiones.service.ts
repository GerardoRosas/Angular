import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url: String;
    constructor(    
        //Servicio
        public _http: HttpClient
    ){
        this.url = 'https://reqres.in/';
    }

    getUser(){
        //Petincion AJAX por hhtp
        return this._http.get(this.url+'api/users/2');
    }

}