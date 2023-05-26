import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BoxSearchComponent } from './shared/components/box-search/box-search.component';

import { ProductoComponent } from './components/producto/producto.component';
import { PersonalComponent } from './components/personal/pagina/personal.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MonitoreoComponent } from './components/monitoreo/pagina/monitoreo.component';
import { ReporteComponent } from './components/reporte/pagina/reporte.component';
import { ProveedorComponent } from './components/proveedor/pagina/proveedor.component';
import { ServicioComponent } from './components/servicio/pagina/servicio.component';

import { FormularioServicioComponent } from './components/servicio/formulario/formulario-servicio.component';
import { FormularioPersonalComponent } from './components/personal/formulario-personal/formulario-personal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BoxSearchComponent,

    ProductoComponent,
    ServicioComponent,
    PersonalComponent,
    ClienteComponent,
    MonitoreoComponent,
    ReporteComponent,
    ProveedorComponent,

    FormularioPersonalComponent,
    FormularioServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
