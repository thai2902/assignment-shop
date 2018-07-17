import { Product } from '../../product-list/product-item/product';

export class CartItem {
    constructor(
        public product: Product,
        public qty: number
    ) { }

    get total() {
        return this.product.price * this.qty;
    }
}
