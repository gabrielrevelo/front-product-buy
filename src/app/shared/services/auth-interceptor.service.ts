import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Obtenemos el token del localStorage
    const token: string = localStorage.getItem('user')!
      ? JSON.parse(localStorage.getItem('user')!).token
      : '';
    //const token: string = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfQURNSU4iXSwic3ViIjoiYWRtaW4iLCJpYXQiOjE2NzY4OTg0MTMsImV4cCI6MTY3NjkyNzIxM30.9fn7qRRIDEAsLnVAZ5Iv75XfKC4TdJvaRvpet7lTIgEHn0Z5X5-_b4NLpPwyHdRL4ROeRhbDHBJc7r7z0hnhVA";

    console.log('Token:', token);

    let request = req;
    //Validamos si el token existe
    if (token !== '') {
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        setHeaders: {
          //Autorizaciòn de tipo Bearer + token
          //El tipo de autorizaciòn depende del back
          authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
