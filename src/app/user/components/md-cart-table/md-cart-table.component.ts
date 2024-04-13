import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../cart/interfaces/Cart.interface';

@Component({
  selector: 'app-md-cart-table',
  templateUrl: './md-cart-table.component.html',
  styleUrl: './md-cart-table.component.css'
})
export class MdCartTableComponent {


  @Input() isModalOPen: boolean = false
  @Input() cartUserList: Cart[] = []

  @Output() hideModal= new EventEmitter<void>()


  onHideModal(){
    this.hideModal.emit()
  }

}
