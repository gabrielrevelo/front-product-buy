import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    let direction = this.url + 'login';
    return this.http.post<any>(direction, user);
  }
}
