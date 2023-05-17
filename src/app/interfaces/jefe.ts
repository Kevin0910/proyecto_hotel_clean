import { TipoDeEmpleado } from "./tipoDeEmpleados";

export class Jefe {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  tipoDeEmpleado: TipoDeEmpleado;
  jefe?: any;
}

