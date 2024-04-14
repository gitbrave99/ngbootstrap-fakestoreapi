import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../cart/interfaces/Cart.interface';

@Pipe({
  name: 'getQuantityCart'
})
export class GetQuantityCartPipe implements PipeTransform {

  transform(prods:Product[]): number {
    return prods.reduce((acumu:number, item)=> acumu + item.quantity,0)
  }

}
