import { ObjetoCliente } from "./cliente";
import { ObjetoServicio } from "./servicio";

export class ObjetoServicioARealizar {
  folio: number;
  fecha: string;
  hora: string;
  servicio: ObjetoServicio;
  cliente: ObjetoCliente;
}
