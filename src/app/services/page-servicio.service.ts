import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageServicioService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private HttpHeaders = new HttpHeaders ({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) { }

  
}
