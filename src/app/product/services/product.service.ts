import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/Product.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  public getAllProducts(sortMethod:string="asc"): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?sort=${sortMethod}`);
  }

  public getProductById(pIdProduct: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${pIdProduct}`);
  }

  public getProductsByLimit(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?limit=${limit}`);
  }

  //typeSort: asc - desc
  public getProductsSorted(typeSort: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?sort=${typeSort}`);
  }

  public saveProduct(newProduct: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.baseUrl}/products`, newProduct);
  }

  public updateProduct(updProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products`, updProduct);
  }

  public deleteProduct(idProduct: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/products/${idProduct}`);
  }
  


}
