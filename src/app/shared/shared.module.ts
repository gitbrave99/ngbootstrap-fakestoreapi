import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { UrlImagePipe } from './pipes/url-image.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerTableComponent } from './components/spinner-table/spinner-table.component';


@NgModule({
  declarations: [
    GenericTableComponent,
    UrlImagePipe,
    NavbarComponent,
    SpinnerComponent,
    SpinnerTableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    GenericTableComponent,
    NavbarComponent,
    SpinnerTableComponent
  ]
})
export class SharedModule { }