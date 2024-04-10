import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartHomePageComponent } from './pages/cart-home-page/cart-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        CartHomePageComponent
    ],
    exports: [
        CartHomePageComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule
    ]
})
export class CartModule { }
