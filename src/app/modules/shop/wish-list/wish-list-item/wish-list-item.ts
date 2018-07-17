import { Product } from '../../product-list/product-item/product';

export class WishlistItem {
    constructor(
        public product: Product,
        public dateAdded: Date = new Date() ) {
    }
}
