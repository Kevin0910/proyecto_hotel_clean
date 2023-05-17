import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api-cliente';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/lista-clientes`)
  }



}
