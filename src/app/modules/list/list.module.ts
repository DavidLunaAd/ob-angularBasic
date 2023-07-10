import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';


@NgModule({
  declarations: [
    ListaBasicaComponent,
    ListaContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //Exportamos aquellos componentes, services, etc que queramos compartir
    ListaBasicaComponent,
    ListaContactosComponent
  ]
})
export class ListModule { }
