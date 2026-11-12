import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClint: HttpClient
  ) { }

  getProducts():Observable<any>{
    return this.httpClint.get<any>('https://fakestoreapi.com/products');
  }

  getProductDetails(id:any):Observable<any>{
    return this.httpClint.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
}
