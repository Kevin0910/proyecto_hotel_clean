import { Jefe } from "./jefe";
import { TipoDeEmpleado } from "./tipoDeEmpleados";

export class Personal {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  tipoDeEmpleado: TipoDeEmpleado;
  jefe?: Jefe;
}



