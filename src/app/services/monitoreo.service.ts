import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoMonitoreo } from '../interfaces/monitoreo';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {

  //TODO Url de la api general de clientes
  private urlEndPoint: string = 'http://localhost:8080/api-monitoreo';

  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  //TODO OBTENER LISTA DE CLIENTES
  getMonitoreos(): Observable<ObjetoMonitoreo[]>{
    return this.http.get<ObjetoMonitoreo[]>(`${this.urlEndPoint}/lista-monitoreo`)
  }

  //TODO OBTENER CLIENTE MEDIANTE ID
  // getCliente(id): Observable<any>{
  //   return this.http.get<any>(`${this.urlEndPoint}buscar-cliente-id/${id}`).pipe(
  //     catchError(e => {
  //       this.router.navigate(['/clientes']);
  //       console.error(e.error.mensaje);
  //       swal('Error al editar', e.error.mensaje, 'error');
  //       return throwError(()=>e)
  //     })
  //   );
  // }

  //TODO OBTENER CLIENTE MEDIANTE BUSCADOR
  busquedaManager(termino: string): Observable<ObjetoMonitoreo[] | null>{
    return this.http.get<ObjetoMonitoreo[]>(`${this.urlEndPoint}/manager-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }

  busquedaServicio(termino: string): Observable<ObjetoMonitoreo[] | null>{
    return this.http.get<ObjetoMonitoreo[]>(`${this.urlEndPoint}/servicio-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }


  // !Modificarlo
  // //CREAR CITAS
  // create(cita: Cita): Observable<any>{
  //   return this.http.post<any>(this.urlEndPoint, cita, {headers:this.HttpHeaders}).pipe(
  //     catchError(e => {

  //       if(e.status == 400){
  //         return throwError(() => e)
  //       }

  //       console.error(e.error.mensaje);
  //       swal(e.error.mensaje, e.error.error, 'error');
  //       return throwError(() => e)
  //     })
  //   );
  // }

  // //OBTENER CITAS
  // getCita(id): Observable<any>{
  //   return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
  //     catchError(e => {
  //       this.router.navigate(['/citas']);
  //       console.error(e.error.mensaje);
  //       swal('Error al editar', e.error.mensaje, 'error');
  //       return throwError(()=>e)
  //     })
  //   );
  // }

  // //MODIFICAR CITAS
  // update(cita: Cita): Observable<any>{
  //   return this.http.put<any>(`${this.urlEndPoint}/${cita.id}`, cita, {headers:this.HttpHeaders}).pipe(
  //       catchError(e => {

  //         if(e.status == 400){
  //           return throwError(() => e)
  //         }

  //         console.error(e.error.mensaje);
  //         swal(e.error.mensaje, e.error.error, 'error');
  //         return throwError(() => e)
  //       })
  //   );
  // }


  // //ELIMINAR CITAS
  // delete(id:number): Observable<any>{
  //   return this.http.delete<any>(`${this.urlEndPoint}/${id}`, {headers:this.HttpHeaders}).pipe(
  //     catchError(e => {
  //       console.error(e.error.mensaje);
  //       swal(e.error.mensaje, e.error.error, 'error');
  //       return throwError(() => e)
  //     })
  //   );
  // }

}
