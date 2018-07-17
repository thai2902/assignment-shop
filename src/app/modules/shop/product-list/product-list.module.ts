import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatCardModule, MatDialogModule, MatDialog } from '@angular/material';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PopupAddToCartComponent } from '../popup-add-to-cart/popup-add-to-cart.component';
import { PopupAddToCartModule } from '../popup-add-to-cart/popup-add-to-cart.module';

const PRODUCTLIST_COMPONENTS = [
  ProductListComponent,
  ProductItemComponent
];

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    ProductListRoutingModule,
    PopupAddToCartModule
  ],
  declarations: [
    PRODUCTLIST_COMPONENTS,
  ],
  entryComponents: [
    PopupAddToCartComponent
  ]
})
export class ProductListModule { }
