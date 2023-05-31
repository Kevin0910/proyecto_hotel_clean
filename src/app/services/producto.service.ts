import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoProducto } from '../interfaces/producto';
import swal from 'sweetalert2';

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


  //! CREAR
  create(objetoProducto: ObjetoProducto): Observable<ObjetoProducto>{
    return this.http.post<ObjetoProducto>(`${this.urlEndPoint}/crear-producto`, objetoProducto, {headers:this.HttpHeaders}).pipe(
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

   //! OBTENER MEDIANTE ID
  getProducto(id): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/buscar-producto-id/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/page-producto']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(()=>e)
      })
    );
  }


  // ! Modificar
  update(objetoProducto: ObjetoProducto): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/editar-producto/${objetoProducto.id}`, objetoProducto, {headers:this.HttpHeaders}).pipe(
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

  //ELIMINAR CITAS
  delete(id:number): Observable<any>{
    return this.http.delete<any>(`${this.urlEndPoint}/eliminar-producto/${id}`, {headers:this.HttpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e)
      })
    );
  }

}
