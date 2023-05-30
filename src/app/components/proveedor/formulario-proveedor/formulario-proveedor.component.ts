import { Component, Input } from '@angular/core';
import { ObjetoProveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'formulario-proveedor',
  templateUrl: './formulario-proveedor.component.html',
  styleUrls: ['./formulario-proveedor.component.css']
})
export class FormularioProveedorComponent {

  public titulo: string = "Crear empleado";
  public proveedor: ObjetoProveedor = new ObjetoProveedor();
  public errores: string[];
  @Input() proveedores: ObjetoProveedor;

  constructor(private proveedorService: ProveedorService,
              private router: Router,
              private activatedRoute: ActivatedRoute){   }




  ngOnInit() {
  this.cargarProveedor();

  }

  cargarProveedor():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.proveedorService.getProveedorId(id).subscribe( (proveedor) => this.proveedor = proveedor);
      }
    })
  }

  //!----------------------------------------------------
  create(): void{
    console.log(this.proveedor);
  this.proveedorService.create(this.proveedor).subscribe(
    jsonResponse => {
      this.router.navigate(['/page-proveedor'])
      // swal('Proveedor Guardado', `El proveedor ${jsonResponse.proveedor.nombre} se a guardado con exito`, 'success')
    }
    // err =>{
    //   this.errores = err.error.errors as string[];
    //   console.error('Error en el codigo backend '+ err.status);
    //   console.error(err.error.errors);
    // }
  );
}

  update():void{
    console.log(this.proveedor);
    this.proveedorService.update(this.proveedor)
    .subscribe (jsonResponse => {
        this.router.navigate(['/page-proveedor'])
        swal('Proveedor Actualizado', `El proveedor ${jsonResponse.proveedor.nombre} se a actualizado con exito`, 'success')
      },
      err =>{
        this.errores = err.error.errors as string[];
        console.error('Error en el codigo backend '+ err.status);
        console.error(err.error.errors);
      }
    );
  }
}
