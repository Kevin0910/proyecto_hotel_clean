import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/pagina/personal.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormularioPersonalComponent } from './components/personal/formulario-personal/formulario-personal.component';

const routes: Routes = [
  {path: '', component: PersonalComponent, pathMatch: 'full'},
  {path: 'page-personal', component: PersonalComponent},
  {path: 'page-producto', component: ProductoComponent},
  {path: 'page-servicio', component: ServicioComponent},
  {path: 'page-cliente', component: ClienteComponent},
  {path: 'personal/formulario-personal', component: FormularioPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
