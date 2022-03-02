import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // rxjs - Reactive Javascript
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // By default, springboot only returns 20 records
  // size=100 forces srpingboot to return 100 records
  // private baseUrl = 'http://localhost:8080/api/products?size=100';
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProductList(catagoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${catagoryId}`;
    return this.http
      .get<GetResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  // Deprecated method
  // getProductList(): Observable<Product[]> {
  //   return this.http
  //     .get<GetResponse>(this.baseUrl)
  //     .pipe(map((response) => response._embedded.products));
  // }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
