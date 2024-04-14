import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {
  public usersList:User[]=[]
  constructor(
    private userService:UserService
  ) {
    this.getListUser()
  }

public getListUser(){
console.log("listando");


  this.userService.getAllUsers().subscribe({
    next:(list)=>{
      this.usersList= list
    }
  })
}

}
