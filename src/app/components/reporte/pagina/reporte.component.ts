import { Component } from '@angular/core';
import { ObjetoServicioARealizar } from 'src/app/interfaces/servicioARealizar';
import { PageServicioService } from 'src/app/services/page-servicio.service';

@Component({
  selector: 'page-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  public serviciosARealizar: ObjetoServicioARealizar[];

  mostrarBusqReporte = false;
  mostrarBusqManager = false;

  constructor(private pageServicioService:PageServicioService){  }

  ngOnInit() {
    this.pageServicioService.getServicios().subscribe(
      (serviciosARealizar) => {this.serviciosARealizar = serviciosARealizar;});

    
  }

}
