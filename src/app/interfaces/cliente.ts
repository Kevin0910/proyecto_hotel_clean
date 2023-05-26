import { ObjetoHabitacion } from "./habitacion";

export class ObjetoCliente {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  habitacion: ObjetoHabitacion;
}
