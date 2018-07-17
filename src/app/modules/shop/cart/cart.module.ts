import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';



const CART_COMPONENTS = [
  CartComponent,
  CartItemComponent,
  CustomerInfoComponent
];

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MAT_MODULES
  ],
  declarations: [
    CART_COMPONENTS,
  ]
})
export class CartModule { }
