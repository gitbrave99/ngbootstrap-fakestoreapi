import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Cart } from '../../cart/interfaces/Cart.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.baseUrl;
  constructor(
    private http:HttpClient
  ) { }


  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

  public getCartByUser(idUser:number):Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseUrl}/carts/user/${idUser}`)
  }

}
