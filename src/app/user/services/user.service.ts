import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/User.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environments.baseUrl;
  constructor(
    private http:HttpClient
  ) { }


  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

}
