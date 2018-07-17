import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() remove = new EventEmitter();
  @Output() addToWishlist = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  checkInputQty() {
    if (this.cartItem.qty <= 0) {
      this.cartItem.qty = 1;
    }
  }
}
