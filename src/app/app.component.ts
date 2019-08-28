import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master en javascript!!!';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(){
    this.mostrar_videojuegos = false;
  }
}
