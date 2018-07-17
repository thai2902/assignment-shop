import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupAddToCartComponent } from '../popup-add-to-cart/popup-add-to-cart.component';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from './product-item/product';
import { ShopState } from '../shop.state';
import * as ShopActions from '../shop.actions';
import { WishlistItem } from '../wish-list/wish-list-item/wish-list-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Select(ShopState.getProductList)
  productList$: Observable<Product[]>;

  constructor(public dialog: MatDialog, private store: Store) {
  }

  addToWishlist(product: Product) {
    const item = new WishlistItem(product);
    this.store.dispatch(new ShopActions.AddToWishlist(item));
  }

  addToCart(product: Product) {
    this.store.dispatch(new ShopActions.ShowAddToCartPopup(product));
  }

  ngOnInit() {
  }

}
