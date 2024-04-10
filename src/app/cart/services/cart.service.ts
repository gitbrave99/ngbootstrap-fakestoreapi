import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Cart, Product } from '../interfaces/Cart.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}/carts`)
  }

  getTotalQuantity() {
    return this.http.get<Cart[]>(`${this.baseUrl}/carts`)
      .pipe(
        map(carts => carts.reduce((total: number, cart: Cart) => {
          return total + cart.products.reduce((subtotal, prod)=> subtotal + prod.quantity,0)
        }, 0),)
      )
  }

}
