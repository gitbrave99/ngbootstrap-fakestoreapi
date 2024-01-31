import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CategoryHomePageComponent } from './pages/category-home-page/category-home-page.component';


@NgModule({
  declarations: [
    
    CategoryHomePageComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    CategoryHomePageComponent
  ]
})
export class CategoryModule { }
