import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart, Product } from '../../../cart/interfaces/Cart.interface';

@Component({
  selector: 'app-md-cart-table',
  templateUrl: './md-cart-table.component.html',
  styleUrl: './md-cart-table.component.css'
})
export class MdCartTableComponent {


  @Input() isModalOPen: boolean = false
  @Input() cartUserList: Cart[] = []
  public subTotal:number = 0

  @Output() hideModal= new EventEmitter<void>()

  onHideModal(){
    this.hideModal.emit()
  }

  getQuantityProducts(tot:Product[]){
    return tot.reduce((acumu:number, item)=> acumu + item.quantity,0)
  }

}
