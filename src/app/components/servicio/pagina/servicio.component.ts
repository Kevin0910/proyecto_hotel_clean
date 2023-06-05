import { Component } from '@angular/core';
import { ObjetoCliente } from 'src/app/interfaces/cliente';
import { ObjetoServicioARealizar } from 'src/app/interfaces/servicioARealizar';
import { PageServicioService } from 'src/app/services/page-servicio.service';
import swal from 'sweetalert2';

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

  busquedaPorNombreCliente(termino: string): void {
    if (termino !== '') {
      this.pageServicioService.busquedaServicioCliente(termino).subscribe(
        (serviciosARealizar) => this.servicioARealizarBusquedas = serviciosARealizar
      );
    } else {
      this.servicioARealizarBusquedas = [];
    }
  }





  deleteBusquedaServicioARealizar(busquedaServiciARealizar:ObjetoServicioARealizar): void{
    swal({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar el servicio del cliente ${busquedaServiciARealizar.cliente.nombre} ${busquedaServiciARealizar.cliente.apellido1}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'No, cancelar',
      confirmButtonText: 'Si, cancelar!'
    }).then((result) => {
      if (result.value) {
        this.pageServicioService.delete(busquedaServiciARealizar.folio).subscribe(
          response => {
            this.servicioARealizarBusquedas = this.servicioARealizarBusquedas.filter(busqServRealizar => busqServRealizar !== busquedaServiciARealizar);
            this.serviciosARealizar = this.serviciosARealizar.filter(cli => cli !== busquedaServiciARealizar);
            swal(
              'Servicio eliminado!',
              `El servicio del cliente ${busquedaServiciARealizar.cliente.nombre} ${busquedaServiciARealizar.cliente.apellido1} ah sido eliminado`,
              'success'
            )
          }
        )
      }
    })
  }


}
