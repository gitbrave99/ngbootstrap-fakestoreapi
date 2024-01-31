import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductHomePageComponent } from './pages/product-home-page/product-home-page.component';
import { ModalGenericComponent } from './components/modal-generic/modal-generic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductHomePageComponent,
    ModalGenericComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    ProductHomePageComponent
  ]
})
export class ProductModule { }
