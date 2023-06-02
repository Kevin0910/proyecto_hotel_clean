import { ProveedorService } from 'src/app/services/proveedor.service';
import { Component } from '@angular/core';
import { ObjetoProducto } from 'src/app/interfaces/producto';
import { ProductoService } from '../../../services/producto.service';
import swal from 'sweetalert2';
import { ObjetoProveedor } from 'src/app/interfaces/proveedor';

@Component({
  selector: 'page-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  public productos: ObjetoProducto[];
  public productoBusquedas: ObjetoProducto[] = [];


  constructor(private productoService:ProductoService){  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (productos) => {this.productos = productos;} );
  }


  busquedaPorNombre(termino: string): void {
    if (termino !== '') {
      this.productoService.busquedaProducto(termino).subscribe(
        productos => this.productoBusquedas = productos
      );
    } else {
      this.productoBusquedas = [];
    }
  }


  //ELIMINAR CLIENTE DE BUSQUEDA
  deleteBusquedaProducto(objetoProducto:ObjetoProducto): void{
    swal({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar el producto ${objetoProducto.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'No, eliminar',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.productoService.delete(objetoProducto.id).subscribe(
          response => {
            this.productoBusquedas = this.productoBusquedas.filter(busqProduc => busqProduc !== objetoProducto)
            swal(
              'Producto eliminado!',
              `El cliente ${objetoProducto.nombre} ah sido eliminado`,
              'success'
            )
          }
        )
      }
    })
  }

}
