import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartHomePageComponent } from './cart/pages/cart-home-page/cart-home-page.component';
import { UserHomePageComponent } from './user/pages/user-home-page/user-home-page.component';
import { ProductHomePageComponent } from './product/pages/product-home-page/product-home-page.component';
import { CategoryHomePageComponent } from './category/pages/category-home-page/category-home-page.component';

const routes: Routes = [
  {
    path:'category',
    component:CategoryHomePageComponent,
  },
  {
    path:'products',
    component:ProductHomePageComponent,
  },
  {
    path:'cart',
    component:CartHomePageComponent,
  },
  {
    path:'user',
    component:UserHomePageComponent,
  },
  {
    path:"**",
    redirectTo:"category"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
