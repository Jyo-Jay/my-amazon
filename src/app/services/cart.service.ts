import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable} from 'rxjs';
import { Cart } from '../model/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiURL="http://localhost:3000"



  cartCounter:number = 0
  cartCounter$=new BehaviorSubject<number>(this.cartCounter)  // It is one the Spcial type Observable which use value at runtime

  constructor(private httpClient:HttpClient) {
    console.log("Service is created")
   }


  addToCart(product:string): Observable<Cart[]>{
    let userid = localStorage.getItem('currentUserId');
    let productQuantity = 1;
    //let input = {userid: userid, product: [product], productQuantity:productQuantity};
    return this.httpClient.post<{data :any[]}>(`${this.apiURL}/cart`, {userid: userid, product: [product], productQuantity:productQuantity})
    .pipe(
      map(response =>{
        return response.data as Cart[];
      }
    ));
   }

   getCartItems(): Observable<Cart[]> {
      return this.httpClient.get<{ data: any[] }>(`${this.apiURL}/cart`, {
       }).pipe(
         map(response => {
           return response.data as Cart[];
         })
       );
     }


   increaseCartCounter(){
    this.cartCounter++
    this.cartCounter$.next(this.cartCounter)
 }




}
