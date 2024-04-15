import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MdCartTableComponent } from './components/md-cart-table/md-cart-table.component';
import { GetQuantityCartPipe } from './pipes/get-quantity-cart.pipe';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        UserHomePageComponent,
        MdCartTableComponent,
        GetQuantityCartPipe
    ],
    exports: [
        UserHomePageComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        SharedModule
    ]
})
export class UserModule { }
