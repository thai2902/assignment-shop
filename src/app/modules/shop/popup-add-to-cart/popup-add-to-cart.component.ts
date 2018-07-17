import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngxs/store';

import { Product } from '../product-list/product-item/product';
import { CartItem } from '../cart/cart-item/cart-item';
import * as ShopActions from '../shop.actions';

@Component({
  selector: 'app-popup-add-to-cart',
  templateUrl: './popup-add-to-cart.component.html',
  styleUrls: ['./popup-add-to-cart.component.scss']
})
export class PopupAddToCartComponent implements OnInit {
  cartItem: CartItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public dialogRef: MatDialogRef<PopupAddToCartComponent>,
    private store: Store
  ) {
    this.cartItem = new CartItem(product, 1);
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addToCart() {
    this.store.dispatch(new ShopActions.AddToCart(this.cartItem));
    this.closeDialog();
  }

  checkInputQty() {
    if (this.cartItem.qty <= 0) {
      this.cartItem.qty = 1;
    }
  }

}
