import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoCliente } from '../interfaces/cliente';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //TODO Url de la api general de clientes
  private urlEndPoint: string = 'http://localhost:8080/api-cliente';

  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  //TODO OBTENER LISTA DE CLIENTES
  getClientes(): Observable<ObjetoCliente[]>{
    return this.http.get<ObjetoCliente[]>(`${this.urlEndPoint}/lista-clientes`)
  }

  //TODO OBTENER CLIENTE MEDIANTE ID
  getCliente(id): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}buscar-cliente-id/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(()=>e)
      })
    );
  }

  //TODO OBTENER CLIENTE MEDIANTE BUSCADOR
  busquedaCliente(termino: string): Observable<ObjetoCliente[] | null>{
    return this.http.get<ObjetoCliente[]>(`${this.urlEndPoint}/cliente-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }



}
