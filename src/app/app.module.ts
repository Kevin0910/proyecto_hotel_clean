import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProductoComponent,
    ServicioComponent,
    PersonalComponent,
    ClienteComponent
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
