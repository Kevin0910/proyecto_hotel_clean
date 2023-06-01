import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoServicio } from '../interfaces/servicio';
import { ObjetoServicioARealizar } from '../interfaces/servicioARealizar';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PageServicioService {

  private urlEndPoint: string = 'http://localhost:8080/api-servicio-a-realizar';
  private urlEndPointListaServicio: string = 'http://localhost:8080/api-servicio';

  private HttpHeaders = new HttpHeaders ({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getListaServicio(): Observable<ObjetoServicio[]>{
    return this.http.get<ObjetoServicio[]>(`${this.urlEndPointListaServicio}/lista-servicios`)
  }

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

  //CREAR
  create(objetoServicioARealizar: ObjetoServicioARealizar): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/crear-servicio`, objetoServicioARealizar, {headers:this.HttpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(() => e)
        }

        console.error(e.error.mensaje);
        swal("Error al registrar el servicio ",e.error.mensaje,  'error');
        return throwError(() => e)
      })
    );
  }

  getServicioARealizarFolio(folio): Observable<any>{
     return this.http.get<any>(`${this.urlEndPoint}/${folio}`).pipe(
       catchError(e => {
         this.router.navigate(['/page-servicio']);
         console.error(e.error.mensaje);
         swal('Error al registrar', e.error.mensaje, 'error');
         return throwError(()=>e)
       })
     );
   }

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
