import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User.interface';
import { Cart, Product } from '../../../cart/interfaces/Cart.interface';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {
  public usersList: User[] = []
  public isOpenModal: boolean = false;
  public isLoading: boolean = false;
  public idUserSelected: number = 0;
  public cartUserList: Cart[] = [];
  public productList: Product[] = [];

  constructor(
    private userService: UserService
  ) {
    this.getListUser();
  }

  showModal() {
    this.isOpenModal = true;
  }

  hideModal() {
    this.isOpenModal = false;
    console.log("ocultando");
  }

  public getListUser() {
    this.isLoading = true
    this.userService.getAllUsers().subscribe({
      next: (list) => {
        this.usersList = list
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  onSelectUser(id: number) {
    this.idUserSelected = id;
    this.userService.getCartByUser(id)
      .subscribe((data) => {
        console.log("seec: ", data);
        this.showModal();
        this.cartUserList = data
      })
  }
}
