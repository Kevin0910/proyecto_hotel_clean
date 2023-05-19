import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { PersonalComponent } from './components/personal/pagina/personal.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormularioPersonalComponent } from './components/personal/formulario-personal/formulario-personal.component';
import { BoxSearchComponent } from './shared/components/box-search/box-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProductoComponent,
    ServicioComponent,
    PersonalComponent,
    ClienteComponent,
    FormularioPersonalComponent,
    BoxSearchComponent
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
