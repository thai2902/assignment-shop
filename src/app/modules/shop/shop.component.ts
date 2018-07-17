import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import * as shopActions from './shop.actions';
import { ShopState } from './shop.state';
import { WishlistItem } from './wish-list/wish-list-item/wish-list-item';
import { Observable } from 'rxjs';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @Select(ShopState.getWishlist)
  wishlist$: Observable<WishlistItem[]>;

  @Select(ShopState.getCart)
  cart$: Observable<Cart>;

  constructor(private store: Store) {
    store.dispatch(shopActions.LoadProductList);
    store.dispatch(shopActions.LoadWishlist);
  }

  ngOnInit() {

  }

}
