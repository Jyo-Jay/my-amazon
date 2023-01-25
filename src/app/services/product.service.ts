import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product.model'
import { map, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //apiURL="http://localhost:3000"
  apiURL="http://localhost:4200/assets/product.json"
  //apiURL="/my-amazon/assets/product.json"
  products$!:Observable<Product[]>

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.products$ = this.http.get<Product[]>(this.apiURL)
    return this.products$
  }

  /* return this.http.get<{ data: any[] }>(`${this.apiURL}/products`, {
    }).pipe(
      map(response => {
        return response.data as Product[];
      })
    );
  } */

}
