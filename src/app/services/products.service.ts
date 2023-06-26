import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url = 'http://localhost:4000/products/page=1';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
