import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';


@NgModule({
  declarations: [
    UserHomePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[
    UserHomePageComponent
  ]
})
export class UserModule { }
