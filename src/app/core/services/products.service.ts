import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';

import {Observable, map} from "rxjs";
import {Product} from "../../shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getProductsData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((values: Product[]) => {
          values.map(item => item.price = 100);
          return values as Product[];
        }
      ));
  }
}
