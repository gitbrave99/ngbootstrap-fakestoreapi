import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartHomePageComponent } from './pages/cart-home-page/cart-home-page.component';


@NgModule({
  declarations: [
    CartHomePageComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[
    CartHomePageComponent
  ]
})
export class CartModule { }
