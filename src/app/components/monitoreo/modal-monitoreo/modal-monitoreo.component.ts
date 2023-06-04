import { Component, Input } from '@angular/core';
import { ModalMonitoreoService } from './modal-monitoreo.service';
import { ObjetoMonitoreo } from 'src/app/interfaces/monitoreo';

@Component({
  selector: 'modal-monitoreo',
  templateUrl: './modal-monitoreo.component.html',
  styleUrls: ['./modal-monitoreo.component.css']
})
export class ModalMonitoreoComponent {

  constructor(public modalMonitoreoService:ModalMonitoreoService ){  }

  @Input() monitoreo: ObjetoMonitoreo;

  ngOnInit() {  }

  cerrarModal (){
    this.modalMonitoreoService.cerrarModalMonitoreo();
  }

}
