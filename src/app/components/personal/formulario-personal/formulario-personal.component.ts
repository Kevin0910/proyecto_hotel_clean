import { ActivatedRoute, Router } from '@angular/router';
import { PersonalService } from '../../../services/personal.service';
import { ObjetoPersonal } from 'src/app/interfaces/personal';
import swal from 'sweetalert2';
import { ObjetoTipoDeEmpleado } from 'src/app/interfaces/tipoDeEmpleado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styleUrls: ['./formulario-personal.component.css']
})
export class FormularioPersonalComponent {

  public personal: ObjetoPersonal = new ObjetoPersonal();
  public listaDeRoles: ObjetoTipoDeEmpleado[];
  public listaManagers: ObjetoPersonal[];

  public errores: string[];


  constructor(private personalService:PersonalService,
              private activatedRoute: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(){
    this.cargarPersonalId();
    this.cargarPersonal();

    this.personalService.getmManager().subscribe(listaManager => this.listaManagers = listaManager)
    this.personalService.getTipoDeEmpleado().subscribe(tipoDeEmpleado => this.listaDeRoles = tipoDeEmpleado)
  }


  cargarPersonalId(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.personalService.getPersonalId(id).subscribe(
          (personal) => this.personal = personal)
      }
    })
  }

    // ! Cargar datos del formulario
    cargarPersonal(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.personalService.getPersonalId(id).subscribe( (personal) => this.personal = personal)
        }
      })
    }

    //! CREAR
    create(): void{
      console.log(this.personal);
      this.personalService.create(this.personal).subscribe(
        jsonResponse => {
        this.router.navigate(['/page-personal'])
        // window.alert('Se ha agrego con exito')
        swal('Servicio Guardado', `El servicio del empleado ${this.personal.nombre} ${this.personal.apellido1} se a guardado con exito`, 'success')
      },
      err =>{
          this.errores = err.error.errors as string[];
          console.error('Acomplete el formulario '+ err.status);
          console.error(err.error.errors);
        }
   );
  }

    //! MODIFICAR
    update():void{
      //console.log(this.serviciosARealizar)
      this.personalService.update(this.personal)
      .subscribe( jsonResposnse => {
          this.router.navigate(['/page-personal'])
          swal ('Empleado Guardado', `El empleado ${jsonResposnse.nombre} ${jsonResposnse.apellido1} se ha actualizado con exito`, 'success' )
        },
         err =>{
           this.errores = err.error.errors as string[];
           console.error('Error en el codigo backend '+ err.status);
           console.error(err.error.errors);
         }
      );
    }


    compararListaManager(o1: ObjetoPersonal, o2:ObjetoPersonal):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

    compararTipoEmpleado(o1: ObjetoTipoDeEmpleado, o2:ObjetoTipoDeEmpleado):boolean{
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }




}
