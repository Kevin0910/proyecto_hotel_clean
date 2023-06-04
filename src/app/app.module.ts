// ! Importe de angular normal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';


// ! Importes de angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

// ! Importe de las rutas
import { AppRoutingModule } from './app-routing.module';

// ! Importe de los componentes compartidos
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BoxSearchComponent } from './shared/components/box-search/box-search.component';

// ! Importe de los componentes
import { ProductoComponent } from './components/producto/pagina/producto.component';
import { PersonalComponent } from './components/personal/pagina/personal.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MonitoreoComponent } from './components/monitoreo/pagina/monitoreo.component';
import { ReporteComponent } from './components/reporte/pagina/reporte.component';
import { ProveedorComponent } from './components/proveedor/pagina/proveedor.component';
import { ServicioComponent } from './components/servicio/pagina/servicio.component';

// ! Importe de los componetes de formularios
import { FormularioServicioComponent } from './components/servicio/formulario-servicio/formulario-servicio.component';
import { FormularioPersonalComponent } from './components/personal/formulario-personal/formulario-personal.component';
import { FormularioProductoComponent } from './components/producto/formulario/formulario-producto.component';
import { FormularioMonitoreoComponent } from './components/monitoreo/formulario-monitoreo/formulario-monitoreo.component';
import { FormularioReporteComponent } from './components/reporte/formulario-reporte/formulario-reporte.component';
import { FormularioProveedorComponent } from './components/proveedor/formulario-proveedor/formulario-proveedor.component';
import { ModalMonitoreoComponent } from './components/monitoreo/modal-monitoreo/modal-monitoreo.component';




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
    FormularioServicioComponent,
    FormularioProductoComponent,
    FormularioMonitoreoComponent,
    FormularioReporteComponent,
    FormularioProveedorComponent,
    ModalMonitoreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
