import { HabitacionCliente } from "./habitacion";

export class Cliente {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  habitacion: HabitacionCliente;
}

