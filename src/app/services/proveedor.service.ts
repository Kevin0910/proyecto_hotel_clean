import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ObjetoProveedor } from '../interfaces/proveedor';

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

  busquedaProveedor(id: string): Observable<ObjetoProveedor[] | null>{
    return this.http.get<ObjetoProveedor[]>(`${this.urlEndPoint}/proveedor-busqueda/${id}`)
          .pipe(
            catchError(e => {
              console.log(e)
              return throwError(() => e)
            })
          );
  }


}
