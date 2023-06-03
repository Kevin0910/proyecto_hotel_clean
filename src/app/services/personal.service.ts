import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { ObjetoPersonal } from '../interfaces/personal';

import swal from 'sweetalert2';
import { ObjetoTipoDeEmpleado } from '../interfaces/tipoDeEmpleado';

@Injectable({
  providedIn: 'root'
})

export class PersonalService {

  private urlEndPoint: string = 'http://localhost:8080/api-empleado';
  private urlEndPointTipoEmpleado: string = 'http://localhost:8080/api-tipoEmpleado';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getPersonal(): Observable<ObjetoPersonal[]>{
    return this.http.get<ObjetoPersonal[]>(`${this.urlEndPoint}/lista-empleados`)
  }

  getTipoDeEmpleado(): Observable<ObjetoTipoDeEmpleado[]>{
    return this.http.get<ObjetoTipoDeEmpleado[]>(`${this.urlEndPointTipoEmpleado}/lista-tipoEmpleados`)
  }

  getmManager(): Observable <ObjetoPersonal[]>{
    return this.http.get<ObjetoPersonal[]>(`${this.urlEndPoint}/lista-managers`);
  }


  //TODO OBTENER CLIENTE MEDIANTE BUSCADOR
  busquedaEmpleado(termino: string): Observable<ObjetoPersonal[] | null>{
    return this.http.get<ObjetoPersonal[]>(`${this.urlEndPoint}/empleado-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }


  getPersonalId(id): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/buscar-empleado-id/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/page-personal']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(()=>e)
      })
    );
  }


  //CREAR PERSONAL
  create(personal: ObjetoPersonal): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/crear-empleado`, personal, {headers:this.HttpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(() => e)
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e)
      })
    );
  }


  //MODIFICAR PERSONAL
  update(objetoPersonal: ObjetoPersonal): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/editar-empleado/${objetoPersonal.id}`, objetoPersonal, {headers:this.HttpHeaders}).pipe(
        catchError(e => {

          if(e.status == 400){
            return throwError(() => e)
          }

          console.error(e.error.mensaje);
          swal(e.error.mensaje, e.error.error, 'error');
          return throwError(() => e)
        })
    );
  }


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
