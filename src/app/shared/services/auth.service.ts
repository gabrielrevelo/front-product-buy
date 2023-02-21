import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    let direction = this.url + 'login';
    return this.http.post<any>(direction, user);
  }

  register(email:string,password:string,role:string){
    let direction = this.url + 'register';

    let user ={
      "username": email,
      "password": password,
     
      "roles": [role]
  
  }
    return this.http.post<any>(direction, user);


  }
}
