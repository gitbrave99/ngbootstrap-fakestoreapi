import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {


  @Input()
  public list:User[]=[]

}
