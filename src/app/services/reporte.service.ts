import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoServicio } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlEndPoint: string = 'http://localhost:8080/api-empleado';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getPersonal(): Observable<ObjetoServicio[]>{
    return this.http.get<ObjetoServicio[]>(`${this.urlEndPoint}/lista-empleados`)
  }

  create(personal: ObjetoServicio): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/crear-empleado`, personal, {headers:this.HttpHeaders}).pipe(
    );
  }


  //TODO OBTENER CLIENTE MEDIANTE BUSCADOR
  busquedaEmpleado(termino: string): Observable<ObjetoServicio[] | null>{
    return this.http.get<ObjetoServicio[]>(`${this.urlEndPoint}/empleado-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }


  // getPersonalId(id): Observable<any>{
  //   return this.http.get<any>(`${this.urlEndPoint}/buscar-empleado-id/${id}`).pipe(
  //     catchError(e => {
  //       this.router.navigate(['/page-personal']);
  //       console.error(e.error.mensaje);
  //       swal('Error al editar', e.error.mensaje, 'error');
  //       return throwError(()=>e)
  //     })
  //   );
  // }

}
