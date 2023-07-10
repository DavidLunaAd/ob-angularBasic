import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/Contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy{

  //Creamos una lista
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  //subscripcion
  subscription: Subscription | undefined;

  //Inyectamos en el constructor el servicio
  constructor(private contactoService: ContactoService) {}
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void{

    //Obtener la lista del servicio
    this.contactoService.obtenerContactos().then((lista:IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.error(`Error al recuperar la lista de contactos: ${error}`))
    .finally(()=> console.log('Petición de lista terminada'));

  }

  obtenerContacto(id: number){
    this.subscription = this.contactoService.obtenerContactoPorId(id)?.subscribe((contacto : IContacto) => this.contactoSeleccionado = contacto);
  }


}
