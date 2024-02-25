import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  uri: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.uri}/user`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.uri}/user/login`, data);
  }
}
