import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '', component: ShopComponent, children: [
      { path: '', loadChildren: './product-list/product-list.module#ProductListModule' },
      { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
      { path: 'wish-list', loadChildren: './wish-list/wish-list.module#WishListModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
