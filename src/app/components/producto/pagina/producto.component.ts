import { Component } from '@angular/core';
import { ObjetoProducto } from 'src/app/interfaces/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'page-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productos: ObjetoProducto[];
  productoBusquedas: ObjetoProducto[] = [];

  constructor(private productoService:ProductoService){  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (productos) => {this.productos = productos;}
    );
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


}
