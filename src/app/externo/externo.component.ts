import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      }, error => {
        console.log(<any>error);
      }
    );
  }

}
