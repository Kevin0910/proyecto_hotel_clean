import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map,Observable, catchError, throwError } from 'rxjs';
import { ObjetoProveedor } from '../interfaces/proveedor';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class ProveedorService {
  private urlEndPoint: string = 'http://localhost:8080/api-proveedor';

  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getProveedor(): Observable<ObjetoProveedor[]>{
    return this.http.get<ObjetoProveedor[]>(`${this.urlEndPoint}/lista-proveedor`);
  }

  // TODO Busqueda por nombre
  busquedaProveedor(termino: string): Observable<ObjetoProveedor[] | null>{
    return this.http.get<ObjetoProveedor[]>(`${this.urlEndPoint}/proveedor-busqueda/${termino}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }



  // ! CREAR PROVEEDOR
  create(objetoProveedor: ObjetoProveedor): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/crear-proveedor`, objetoProveedor, {headers:this.HttpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(() => e)
        }

        console.error(e.error.mensaje);
        swal("Error al crear",e.error.mensaje,'error');
        return throwError(() => e)
      })
    );
  }

    // ! GET PARA OBTENER CLIENTES MEDIANTE ID
    getProveedorId(id): Observable<ObjetoProveedor>{
      return this.http.get<ObjetoProveedor>(`${this.urlEndPoint}/buscar-proveedor-id/${id}`).pipe(
        catchError(e => {
          this.router.navigate(['/page-proveedor'])
          console.error(e.error.mensaje);
          swal("error", e.error.mensaje, 'error')
          return throwError(() => e);
        })
      );
    }


  // ! Modificarlo

   // TODO MODIFICAR
  update(objetoProveedor: ObjetoProveedor): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/editar-proveedor/${objetoProveedor.id}`, objetoProveedor, {headers:this.HttpHeaders}).pipe(
        catchError(e => {

          if(e.status == 400){
            return throwError(() => e)
          }

          console.error(e.error.mensaje);
          swal("Error al editar",e.error.mensaje, 'error');
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
