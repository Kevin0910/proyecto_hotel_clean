import { Component } from '@angular/core';
import { ObjetoServicioARealizar } from 'src/app/interfaces/servicioARealizar';
import { PageServicioService } from 'src/app/services/page-servicio.service';

@Component({
  selector: 'page-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {

  serviciosARealizar: ObjetoServicioARealizar[];
  servicioARealizarBusquedas: ObjetoServicioARealizar[] = [];

  constructor(private pageServicioService:PageServicioService){  }


  ngOnInit(){
    this.pageServicioService.getServicios().subscribe(
      (serviciosARealizar) => {this.serviciosARealizar = serviciosARealizar;}
    )
  }

  busquedaPorNombre(termino: string): void {
    if (termino !== '') {
      this.pageServicioService.busquedaServicioCliente(termino).subscribe(
        (serviciosARealizar) => this.servicioARealizarBusquedas = serviciosARealizar
      );
    } else {
      this.servicioARealizarBusquedas = [];
    }
  }

}
