import { Component, Input } from '@angular/core';
import { ModalMonitoreoService } from './modal-monitoreo.service';
import { ObjetoMonitoreo } from 'src/app/interfaces/monitoreo';
import { PageServicioService } from '../../../services/page-servicio.service';
import { ObjetoServicioActProd } from 'src/app/interfaces/servicioActProd';

@Component({
  selector: 'modal-monitoreo',
  templateUrl: './modal-monitoreo.component.html',
  styleUrls: ['./modal-monitoreo.component.css']
})
export class ModalMonitoreoComponent {

  public listaServiciosDobles: ObjetoServicioActProd[];

  constructor(public modalMonitoreoService:ModalMonitoreoService,
              private pageServicioService:PageServicioService){  }

  @Input() monitoreo: ObjetoMonitoreo;

  ngOnInit() {   }

  cerrarModal (){
    this.modalMonitoreoService.cerrarModalMonitoreo();
  }

}
