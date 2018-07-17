import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

const WISHLIST_COMPONENTS = [
  WishListComponent
];

const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    WishListRoutingModule,
    MAT_MODULES,
    MomentModule
  ],
  declarations: [
    WISHLIST_COMPONENTS,
    WishListItemComponent
  ]
})
export class WishListModule { }
