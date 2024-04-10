import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../shared/interfaces/Product.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


  public getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`)
  }

  // You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results
  public getProductByCategory(pCategory: string,sortMethod:string="asc"): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/category/${pCategory}?sort=${sortMethod}`);
  }

  public getCountProductByCategory(pCategory: string):Observable<number> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/category/${pCategory}`)
      .pipe(map((resProd) => resProd.length))
  }


}
