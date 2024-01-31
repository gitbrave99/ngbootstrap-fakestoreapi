import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { UrlImagePipe } from './pipes/url-image.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    GenericTableComponent,
    UrlImagePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    GenericTableComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
