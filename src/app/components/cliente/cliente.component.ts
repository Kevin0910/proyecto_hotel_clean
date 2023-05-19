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
  clienteBusquedas: Cliente[] = [];

  constructor(private clienteService:ClienteService){  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes) => {this.clientes = clientes;}
    );
  }


  busquedaPorNombre(termino: string): void {
    if (termino !== '') {
      this.clienteService.busquedaCliente(termino).subscribe(
        clientes => this.clienteBusquedas = clientes
      );
    } else {
      this.clienteBusquedas = [];
    }
  }

}
