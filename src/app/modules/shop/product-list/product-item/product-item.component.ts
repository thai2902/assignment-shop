import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from './product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToWishlist = new EventEmitter();
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToWishlist() {
    this.addToWishlist.emit(this.product);
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

}
