import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Personal } from '../interfaces/personal';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class PersonalService {

  private urlEndPoint: string = 'http://localhost:8080/api-empleado';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getPersonal(): Observable<Personal[]>{
    return this.http.get<Personal[]>(`${this.urlEndPoint}/lista-empleados`)
  }

  create(personal: Personal): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/crear-empleado`, personal, {headers:this.HttpHeaders}).pipe(
    );
  }


  //TODO OBTENER CLIENTE MEDIANTE BUSCADOR
  busquedaEmpleado(termino: string): Observable<Personal[] | null>{
    return this.http.get<Personal[]>(`${this.urlEndPoint}/empleado-busqueda/${termino}`)
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




}
