import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserHomePageComponent,
    TableUsersComponent
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
