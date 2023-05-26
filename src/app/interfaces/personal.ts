import { ObjetoTipoDeEmpleado } from "./tipoDeEmpleado";

export class ObjetoPersonal {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  tipoDeEmpleado: ObjetoTipoDeEmpleado;
  jefe?: Jefe;
}

export class Jefe {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string;
  tipoDeEmpleado: ObjetoTipoDeEmpleado;
  jefe?: any;
}
