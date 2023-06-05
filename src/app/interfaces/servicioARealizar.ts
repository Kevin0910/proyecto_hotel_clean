import { ObjetoCliente } from "./cliente";
import { Jefe } from "./personal";
import { ObjetoServicio } from "./servicio";

export class ObjetoServicioARealizar {
  folio: number;
  fecha: string;
  hora: string;
  servicio: ObjetoServicio;
  cliente: ObjetoCliente;
  jefe: Jefe;
}
