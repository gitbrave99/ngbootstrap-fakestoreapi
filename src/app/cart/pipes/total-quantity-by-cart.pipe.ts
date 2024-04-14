import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/Cart.interface';

@Pipe({
  name: 'totalQuantityByCart'
})
export class TotalQuantityByCartPipe implements PipeTransform {

  transform(products: Product[]): number {    
    return products.reduce((acumulador:number, ps:Product)=>{
      return acumulador + ps.quantity
    },0)
    
  }

}
