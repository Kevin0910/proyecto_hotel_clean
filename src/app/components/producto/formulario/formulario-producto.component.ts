import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, flatMap, map, startWith } from 'rxjs';

import { ObjetoProveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ObjetoProducto } from 'src/app/interfaces/producto';
import { ProductoService } from '../../../services/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: [ './formulario-producto.css'  ]
})

export class FormularioProductoComponent {

  public errores: string[];
  public proveedores: ObjetoProveedor = new ObjetoProveedor();
  public listaProveedores: ObjetoProveedor[];
  public proveedorBusquedas: ObjetoProveedor[] = [];

  // autoCompletado = new FormControl('');
  // proveedoresFiltrados: Observable<ObjetoProveedor[]>;

  public producto: ObjetoProducto = new ObjetoProducto();


  constructor(private proveedorService:ProveedorService,
              private productoService:ProductoService,
              private router: Router,
              private activatedRoute: ActivatedRoute){  }


  ngOnInit() {
    // this.proveedoresFiltrados = this.autoCompletado.valueChanges
    // .pipe(
    //   map( value =>typeof value === 'string' ? value: value),
    //   flatMap(value => value ? this._filter(value || ''):[ ]),
    // );

    this.cargarProducto();

    this.proveedorService.getProveedor().subscribe(listaProveedores => this.listaProveedores = listaProveedores)
  }


  // private _filter(value: string): Observable<ObjetoProveedor[]> {
  //   const filterValue = value.toLowerCase();
  //   return this.proveedorService.busquedaProveedor(filterValue);
  // }


  // busquedaPorNombreProveedor(termino: string): void {
  //   if (termino !== '') {
  //     this.proveedorService.busquedaProveedor(termino).subscribe(
  //       proveedores => this.proveedorBusquedas = proveedores
  //     );
  //   } else {
  //     this.proveedorBusquedas = [];
  //   }
  // }


  cargarProducto():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.getProducto(id).subscribe( (producto) => this.producto = producto);
      }
    })
  }


  create(): void{
    console.log(this.producto);
  this.productoService.create(this.producto).subscribe(
    jsonResponse => {
      this.router.navigate(['/page-producto'])
      swal('Producto Guardado', `El producto ${jsonResponse.producto.nombre} se ha guardado con éxito`, 'success')
    },
    err =>{
      this.errores = err.error.errors as string[];
      console.error('Error: '+ err.status);
      console.error(err.error.errors);
    }
 );
}


update():void{
  console.log(this.producto);
  this.productoService.update(this.producto)
  .subscribe (producto => {
      this.router.navigate(['/page-producto'])
      swal('Proveedor Actualizado', `El producto ${producto.nombre} se a actualizado con exito`, 'success')
    },
     err =>{
       this.errores = err.error.errors as string[];
       console.error('Error: '+ err.status);
       console.error(err.error.errors);
     }
  );
}
    compararProveedores(o1: ObjetoProveedor, o2:ObjetoProveedor):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
}



