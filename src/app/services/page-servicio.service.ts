import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoServicio } from '../interfaces/servicio';
import { ObjetoServicioARealizar } from '../interfaces/servicioARealizar';

@Injectable({
  providedIn: 'root'
})
export class PageServicioService {

  private urlEndPoint: string = 'http://localhost:8080/api-servicio-a-realizar';
  private HttpHeaders = new HttpHeaders ({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getServicios(): Observable<ObjetoServicioARealizar[]>{
    return this.http.get<ObjetoServicioARealizar[]>(`${this.urlEndPoint}/lista-servicio-a-realizar`)
  }

  busquedaServicioCliente(termino: string): Observable<ObjetoServicioARealizar[] | null>{
    return this.http.get<ObjetoServicioARealizar[]>(`${this.urlEndPoint}/servicio-a-realizar-cliente/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }



}
