import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buy } from 'src/app/interfaces/buy';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  buy(buy: any): Observable<any> {
    let direction = this.url + 'create';
    return this.http.post<any>(direction, buy, {
      responseType: 'text' as 'json',
    });
  }

  getBuys(): Observable<Buy[]> {
    let direction = this.url + 'list';
    return this.http.get<Buy[]>(direction);
  }

}
