import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishlistItem } from './wish-list-item';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent implements OnInit {
  @Input() wishListItem: WishlistItem;
  @Output() addToCart = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
