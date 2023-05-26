import { Component } from '@angular/core';
import { PersonalService } from '../../../services/personal.service';
import { ActivatedRoute } from '@angular/router';
import { ObjetoPersonal } from 'src/app/interfaces/personal';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styleUrls: ['./formulario-personal.component.css']
})
export class FormularioPersonalComponent {

  public personal: ObjetoPersonal;

  constructor(private personalService:PersonalService,
              private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.cargarPersonalId();
  }


  cargarPersonalId(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.personalService.getPersonalId(id).subscribe(
          (personal) => this.personal = personal)
      }
    })
  }
}
