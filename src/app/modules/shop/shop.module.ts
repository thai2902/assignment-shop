import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatDialogModule } from '@angular/material';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

const MAT_MODULES = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    MAT_MODULES
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
