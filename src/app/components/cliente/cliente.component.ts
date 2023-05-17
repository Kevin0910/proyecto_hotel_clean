import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})

export class ClienteComponent {


  clientes: Cliente[];


  constructor(private clienteService:ClienteService,
              private habitacionService:HabitacionService){  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes) => {this.clientes = clientes;}
    );
  }
}
