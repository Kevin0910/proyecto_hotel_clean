import { Component } from '@angular/core';
import { ObjetoPersonal } from 'src/app/interfaces/personal';
import { PersonalService } from '../../../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent {

  personales: ObjetoPersonal[];
  personalBusquedas: ObjetoPersonal[] = [];

  constructor(private personalService:PersonalService){}

  ngOnInit(){
    this.personalService.getPersonal().subscribe(
      (personales) => {this.personales = personales;});

      

  }


  busquedaPorNombreEmpleado(termino: string): void {
    if (termino !== '') {
      this.personalService.busquedaEmpleado(termino).subscribe(
        personales => this.personalBusquedas = personales
      );
    } else {
      this.personalBusquedas = [];
    }
  }


}
