import { Jefe, ObjetoPersonal } from "./personal";
import { ObjetoServicioARealizar } from "./servicioARealizar";

export class ObjetoMonitoreo {
  folio: number;
  fecha: string;
  hora: string;
  servicio: ObjetoServicioARealizar;
  manager: Jefe;
}
