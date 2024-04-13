import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MdCartTableComponent } from './components/md-cart-table/md-cart-table.component';


@NgModule({
  declarations: [
    UserHomePageComponent,
    TableUsersComponent,
    MdCartTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports:[
    UserHomePageComponent
  ]
})
export class UserModule { }
