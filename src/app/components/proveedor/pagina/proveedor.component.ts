import { Component } from '@angular/core';
import { ObjetoProveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'page-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {

  public proveedores: ObjetoProveedor[];
  public proveedorBusquedas: ObjetoProveedor[] = [];

  constructor(private proveedorService:ProveedorService){  }

  ngOnInit(){
    this.proveedorService.getProveedor().subscribe(
      (proveedor) => {this.proveedores = proveedor}
      )
    }

    busquedaPorNombre(termino: string): void {
      if (termino !== '') {
        this.proveedorService.busquedaProveedor(termino).subscribe(
          proveedores => this.proveedorBusquedas = proveedores
        );
      } else {
        this.proveedorBusquedas = [];
      }
  }

}

