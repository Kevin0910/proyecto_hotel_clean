import { Component } from '@angular/core';
import { ObjetoProveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { FormControl } from '@angular/forms';
import { Observable, flatMap, map, startWith } from 'rxjs';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: [ './formulario-producto.css'  ]
})

export class FormularioProductoComponent {

  proveedores: ObjetoProveedor[];
  proveedorBusquedas: ObjetoProveedor[] = [];

  autoCompletado = new FormControl('');
  // proveedorFormulario: string[] = ['One', 'Two', 'Three'];
  proveedoresFiltrados: Observable<ObjetoProveedor[]>;

  constructor(private proveedorService:ProveedorService){}

  // ngOnInit(){
  //   this.proveedorService.getPersonal().subscribe(
  //     (personales) => {this.personales = personales;}
  //   )
  // }

  ngOnInit() {
    this.proveedoresFiltrados = this.autoCompletado.valueChanges
    .pipe(
      map( value =>typeof value === 'string' ? value: value),
      flatMap(value => value ? this._filter(value || ''):[ ]),
    );
  }

  
  private _filter(value: string): Observable<ObjetoProveedor[]> {
    const filterValue = value.toLowerCase();

    return this.proveedorService.busquedaProveedor(filterValue);
  }


  busquedaPorNombreProveedor(termino: string): void {
    if (termino !== '') {
      this.proveedorService.busquedaProveedor(termino).subscribe(
        proveedores => this.proveedorBusquedas = proveedores
      );
    } else {
      this.proveedorBusquedas = [];
    }
  }
}
