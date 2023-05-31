import { ObjetoCliente } from './../../../interfaces/cliente';
import { ClienteService } from './../../../services/cliente.service';
import { Component } from '@angular/core';
import { PageServicioService } from '../../../services/page-servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetoServicioARealizar } from 'src/app/interfaces/servicioARealizar';
import { ObjetoServicio } from 'src/app/interfaces/servicio';
import { FormControl } from '@angular/forms';
import { Observable, flatMap, map } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css']
})
export class FormularioServicioComponent {

  public serviciosARealizar: ObjetoServicioARealizar = new ObjetoServicioARealizar();

  public tipoDeServicios: ObjetoServicio[];
  public listaClientes: ObjetoCliente[];

  public cliente: ObjetoCliente = new ObjetoCliente();

  autoCompletado = new FormControl('');
  clientesFiltrados: Observable<ObjetoCliente>

  constructor(private pageServicioService:PageServicioService,
              private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit() {

    this.clientesFiltrados = this.autoCompletado.valueChanges
    .pipe(
      map( value =>typeof value === 'string' ? value: value),
      flatMap(value => value ? this._filter(value || ''):[ ]),
    );


    this.pageServicioService.getListaServicio().subscribe(tipoDeServicios => this.tipoDeServicios = tipoDeServicios );
    this.clienteService.getClientes().subscribe(listaClientes => this.listaClientes = listaClientes);
    }

    private _filter(value: string): Observable<ObjetoCliente[]> {
      const filterValue = value.toLowerCase();
      return this.clienteService.busquedaCliente(filterValue);
    }



    //! CREAR
    create(): void{
      console.log(this.serviciosARealizar);
      this.pageServicioService.create(this.serviciosARealizar).subscribe(
      producto => {
        this.router.navigate(['/page-servicio'])
        swal('Producto Guardado', `El producto ${producto.nombre} se a guardado con exito`, 'success')
      }
    )
  }

    //! MODIFICAR



    compararTipoServicios(o1: ObjetoServicio, o2: ObjetoServicio):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

    compararClientes(o1: ObjetoCliente, o2:ObjetoCliente):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

}
