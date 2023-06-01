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
  public titulo: string = "Registrar servicio";

  public servicioARealizar: ObjetoServicioARealizar = new ObjetoServicioARealizar();

  public tipoDeServicios: ObjetoServicio[];
  public listaClientes: ObjetoCliente[];
  public errores: string[];
  public cliente: ObjetoCliente = new ObjetoCliente();

  autoCompletado = new FormControl('');
  clientesFiltrados: Observable<ObjetoCliente>

  constructor(private pageServicioService:PageServicioService,
              private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.cargarServicios();

    this.cargarServicioARealizar();

    this.clientesFiltrados = this.autoCompletado.valueChanges
    .pipe(
      map( value =>typeof value === 'string' ? value: value),
      flatMap(value => value ? this._filter(value || ''):[ ]),
    );


    this.pageServicioService.getListaServicio().subscribe(tipoDeServicios => this.tipoDeServicios = tipoDeServicios );
    this.clienteService.getClientes().subscribe(listaClientes => this.listaClientes = listaClientes);
    }


  cargarServicios():void{
    this.activatedRoute.params.subscribe(params => {
      let folio = params['folio']
      if(folio){
        this.pageServicioService.getServicioARealizarFolio(folio).subscribe( (serviciosARealizar) => this.servicioARealizar = serviciosARealizar);
      }
    })
  }

    private _filter(value: string): Observable<ObjetoCliente[]> {
      const filterValue = value.toLowerCase();
      return this.clienteService.busquedaCliente(filterValue);
    }


    // ! Cargar datos del formulario
  cargarServicioARealizar(): void{
    this.activatedRoute.params.subscribe(params => {
      let folio = params['folio']
      if(folio){
        this.pageServicioService.getServicioARealizar(folio).subscribe( (serviciosARealizar) => this.servicioARealizar = serviciosARealizar)
      }
    })
  }



    //! CREAR
    create(): void{
      console.log(this.servicioARealizar);
      this.pageServicioService.create(this.servicioARealizar).subscribe(
        serviciosARealizar => {
        this.router.navigate(['/page-servicio'])
        swal('Servicio Guardado', `El servicio del cliente ${serviciosARealizar.cliente.nombre} ${serviciosARealizar.cliente.apellido1} se a guardado con exito`, 'success')
      }
   );
  }

    //! MODIFICAR
    update():void{
      //console.log(this.serviciosARealizar)
      this.pageServicioService.update(this.servicioARealizar)
      .subscribe( servicioARealizar => {
          this.router.navigate(['/page-servicio'])
          swal ('Servicio Guardado', `El servicio del cliente ${servicioARealizar.cliente.nombre} ${servicioARealizar.cliente.apellido1} se ha actualizado con exito`, 'success' )
        }
        // err =>{
        //   this.errores = err.error.errors as string[];
        //   console.error('Error en el codigo backend '+ err.status);
        //   console.error(err.error.errors);
        // }
      );
    }



    fechaActual():string{
      return new Date().toISOString().split("T")[0];
    }
    compararTipoServicios(o1: ObjetoServicio, o2: ObjetoServicio):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

    compararClientes(o1: ObjetoCliente, o2:ObjetoCliente):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

}
