import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
   public nombre: String;
   public followers: Number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    
  }

  ngOnInit() { //Metodo que se ejecuta nada mas cargar el componente
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers; //El + cambia el tipo de string a number
      console.log(this.nombre);
    });
  }

  redirigir(){
    //Redireccio al componente Zapatillas
    this._router.navigate(['/zapatillas']);
  }

}
