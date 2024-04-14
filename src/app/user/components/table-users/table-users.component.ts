import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/User.interface';
import { UserService } from '../../services/user.service';
import { Cart, Product } from '../../../cart/interfaces/Cart.interface';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {

  public isOpenModal: boolean = false;
  public idUserSelected:number=0;
  public cartUserList:Cart[]=[];
  public productList:Product[]=[];
  



  @Input()
  public list: User[] = []

  constructor(
    private userService:UserService
  ){

  }

  showModal() {
    this.isOpenModal = true;
  }

  hideModal() {
    this.isOpenModal = false;
    console.log("ocultando");
  }

  onSelectUser(id:number){
    this.idUserSelected=id;
    this.userService.getCartByUser(id)
    .subscribe((data)=>{
      console.log("seec: ", data);
      this.showModal();
      this.cartUserList= data
      if (data) {
        // this.productList =data.flatMap(carts=> carts.products)
        // console.log("data = ", this.productList);
        
      }
            
    })
  }

}
