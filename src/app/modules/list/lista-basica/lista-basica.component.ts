import { Component } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent {

  cargando: boolean = true;
  opcion: number = 0;
  listaElementos: Producto[] = [
    {nombre: 'Leche',
     precio: 2,
     descripcion:'Leche desatada'},
    {nombre: 'Carne',
     precio: 19,
     descripcion:'De cerdo'},
     {nombre: 'Carne',
     precio: 25,
     descripcion:'De oveja'}
  ];

  ngOnInit(): void {

  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida;
  }
}
