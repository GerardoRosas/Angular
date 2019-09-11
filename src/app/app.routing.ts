//Importar modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';
import {HomeComponent} from './home/home.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}//Linea que se pone al final porque será el error 404

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
