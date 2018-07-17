import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ShopState } from '../shop.state';
import * as ShopActions from '../shop.actions';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { CartItem } from './cart-item/cart-item';
import { WishlistItem } from '../wish-list/wish-list-item/wish-list-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Select(ShopState.getCart)
  cart$: Observable<Cart>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addToWishlist(cartItem: CartItem) {
    this.store.dispatch(new ShopActions.AddToWishlist(new WishlistItem(cartItem.product)));
  }

  remove(cartItem: CartItem) {
    this.store.dispatch(new ShopActions.RemoveCartItem(cartItem));
  }

  modifyCartItem(cartItem: CartItem) { }

}
