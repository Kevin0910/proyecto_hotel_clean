import { Component } from '@angular/core';
import { Personal } from 'src/app/interfaces/personal';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent {

  personales: Personal[];

  constructor(private personalService:PersonalService){}

  ngOnInit(){
    this.personalService.getPersonal().subscribe(
      (personales) => {this.personales = personales;}
    )
  }


}
