import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMonitoreoService {

  modal: boolean = false;

  constructor() { }

  //Metodo para abrir el modal
  abrirModalMonitoreo(){
    this.modal = true;
  }

  //Metodo para cerrar el modal
  cerrarModalMonitoreo(){
    this.modal = false;
  }


}
