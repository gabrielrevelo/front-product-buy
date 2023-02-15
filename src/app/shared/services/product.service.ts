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

  getAll(): Observable<Product[]> {
    let direction = this.url + 'list/';
    return this.http.get<Product[]>(direction);
  }

  getPage(page: number): Observable<Product[]> {
    let direction = this.url + 'list/' + page;
    return this.http.get<Product[]>(direction);
  }

  getTotalPages(): Observable<number> {
    let direction = this.url + 'totalPages';
    return this.http.get<number>(direction);
  }

  createProduct(product: Product): Observable<Product> {
    let direction = this.url + 'create';
    return this.http.post<Product>(direction, product, {
      responseType: 'text' as 'json',
    });
  }

  delete(id: string): Observable<void> {
    let direction = this.url + 'delete/' + id;
    return this.http.delete<void>(direction);
  }

}
