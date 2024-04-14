import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MdCartTableComponent } from './components/md-cart-table/md-cart-table.component';
import { GetQuantityCartPipe } from './pipes/get-quantity-cart.pipe';


@NgModule({
  declarations: [
    UserHomePageComponent,
    TableUsersComponent,
    MdCartTableComponent,
    GetQuantityCartPipe
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
