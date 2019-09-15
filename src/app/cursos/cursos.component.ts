import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  private _route: ActivatedRoute;
  private _router: Router;
  
  constructor(){
    
  }

  ngOnInit() { //Metodo que se ejecuta nada mas cargar el componente
    this._route.params.subscribe((params: Params) => {
        console.log(params);
    })
  }

}
