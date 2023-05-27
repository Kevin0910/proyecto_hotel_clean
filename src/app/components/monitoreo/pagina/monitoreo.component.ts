import { Component } from '@angular/core';

import { ObjetoMonitoreo } from 'src/app/interfaces/monitoreo';
import { MonitoreoService } from 'src/app/services/monitoreo.service';

@Component({
  selector: 'page-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})
export class MonitoreoComponent {

  monitoreos: ObjetoMonitoreo[];
  monitoreoBusquedas: ObjetoMonitoreo[] = [];

  constructor(private monitoreoService: MonitoreoService){}

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


}
