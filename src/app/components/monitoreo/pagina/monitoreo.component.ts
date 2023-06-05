import { Component } from '@angular/core';

import { ObjetoMonitoreo } from 'src/app/interfaces/monitoreo';
import { MonitoreoService } from 'src/app/services/monitoreo.service';
import { ModalMonitoreoService } from '../modal-monitoreo/modal-monitoreo.service';

@Component({
  selector: 'page-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})
export class MonitoreoComponent {

  monitoreos: ObjetoMonitoreo[];
  monitoreoBusquedas: ObjetoMonitoreo[] = [];
  monitoreoSeleccionado: ObjetoMonitoreo;

  constructor(private monitoreoService: MonitoreoService,
              private modalMonitoreoService: ModalMonitoreoService){}

  ngOnInit(){
    this.monitoreoService.getMonitoreos().subscribe(
      (monitoreos) => {this.monitoreos = monitoreos;}
    )
  }

  busquedaPorNombreManager(termino: string): void {
    if (termino !== '') {
      this.monitoreoService.busquedaManager(termino).subscribe(
        monitoreos => this.monitoreoBusquedas = monitoreos
      );
    } else {
      this.monitoreoBusquedas = [];
    }
  }

  abrirModal(objetoMonitoreo:ObjetoMonitoreo){
    this.monitoreoSeleccionado = objetoMonitoreo;
    this.modalMonitoreoService.abrirModalMonitoreo();
    }
  }
