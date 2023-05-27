import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoProducto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //TODO Url de la api general de clientes
  private urlEndPoint: string = 'http://localhost:8080/api-producto';

  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  //TODO OBTENER LISTA DE CLIENTES
  getProductos(): Observable<ObjetoProducto[]>{
    return this.http.get<ObjetoProducto[]>(`${this.urlEndPoint}/lista-productos`)
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
  busquedaProducto(termino: string): Observable<ObjetoProducto[] | null>{
    return this.http.get<ObjetoProducto[]>(`${this.urlEndPoint}/producto-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }


}
