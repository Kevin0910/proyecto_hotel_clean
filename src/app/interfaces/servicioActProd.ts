import { ObjetoActividad } from "./actividad";
import { ObjetoProducto } from "./producto";
import { ObjetoServicio } from "./servicio";

export class ObjetoServicioActProd {
  id: number;
  servicio: ObjetoServicio;
  producto: ObjetoProducto;
  actividad: ObjetoActividad;
}
  