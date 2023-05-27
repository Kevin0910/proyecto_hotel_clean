import { Component } from '@angular/core';
import { ObjetoProveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'page-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {

  proveedores: ObjetoProveedor[];
  proveedorBusquedas: ObjetoProveedor[] = [];

  constructor(private proveedorService:ProveedorService){  }

  ngOnInit(){
    this.proveedorService.getProveedor().subscribe(
      (proveedor) => {this.proveedores = proveedor}
      )
    }

    busquedaPorNombre(id: string): void {
      if (id !== '') {
        this.proveedorService.busquedaProveedor(id).subscribe(
          proveedores => this.proveedorBusquedas = proveedores
        );
      } else {
        this.proveedorBusquedas = [];
      }
  }

}
