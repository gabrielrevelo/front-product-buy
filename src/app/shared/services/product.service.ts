import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<Product[]> {
    let direction = this.url + 'list/' + page;
    return this.http.get<Product[]>(direction);
  }

}
