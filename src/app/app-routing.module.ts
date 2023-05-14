import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {path: '', component: PersonalComponent, pathMatch: 'full'},
  {path: 'page-personal', component: PersonalComponent},
  {path: 'page-producto', component: ProductoComponent},
  {path: 'page-servicio', component: ServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
