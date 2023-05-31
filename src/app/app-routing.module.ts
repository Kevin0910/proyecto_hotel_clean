import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/pagina/personal.component';
import { ProductoComponent } from './components/producto/pagina/producto.component';
import { ServicioComponent } from './components/servicio/pagina/servicio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ReporteComponent } from './components/reporte/pagina/reporte.component';
import { MonitoreoComponent } from './components/monitoreo/pagina/monitoreo.component';
import { ProveedorComponent } from './components/proveedor/pagina/proveedor.component';

import { FormularioPersonalComponent } from './components/personal/formulario-personal/formulario-personal.component';
import { FormularioProveedorComponent } from './components/proveedor/formulario-proveedor/formulario-proveedor.component';
import { FormularioProductoComponent } from './components/producto/formulario/formulario-producto.component';
import { FormularioServicioComponent } from './components/servicio/formulario-servicio/formulario-servicio.component';

const routes: Routes = [
  {path: '', component: PersonalComponent, pathMatch: 'full'},
  {path: 'page-personal', component: PersonalComponent},
  {path: 'page-producto', component: ProductoComponent},
  {path: 'page-servicio', component: ServicioComponent},
  {path: 'page-cliente', component: ClienteComponent},
  {path: 'page-reporte', component: ReporteComponent },
  {path: 'page-monitoreo', component: MonitoreoComponent},
  {path: 'page-proveedor', component: ProveedorComponent},

  {path: 'personal/formulario-personal', component: FormularioPersonalComponent},
  {path: 'proveedor/formulario-proveedor', component: FormularioProveedorComponent},
  {path: 'producto/formulario-producto', component: FormularioProductoComponent},

  {path: 'servicio/formulario-servicio', component: FormularioServicioComponent},
  {path: 'proveedor/formulario-proveedor/:id', component: FormularioProveedorComponent},
  {path: 'producto/formulario-producto/:id', component: FormularioProductoComponent},
  {path: 'personal/formulario-personal/:id', component: FormularioPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
