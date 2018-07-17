import { Component, OnInit } from '@angular/core';
import { WishlistItem } from './wish-list-item/wish-list-item';
import { Select, Store } from '@ngxs/store';
import { ShopState } from '../shop.state';
import { Observable } from 'rxjs';
import * as ShopActions from '../shop.actions';
import { Product } from '../product-list/product-item/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  @Select(ShopState.getWishlist)
  wishlist$: Observable<WishlistItem[]>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.store.dispatch(new ShopActions.ShowAddToCartPopup(product));
  }

  removeFromWishlist(wishListItem: WishlistItem) {
    this.store.dispatch(new ShopActions.RemoveFromWishlist(wishListItem));
  }

}
