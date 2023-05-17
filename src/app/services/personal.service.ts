import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Personal } from '../interfaces/personal';

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

  
}
