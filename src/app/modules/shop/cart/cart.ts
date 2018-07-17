import { CartItem } from './cart-item/cart-item';
import { Customer } from './customer-info/customer';

export class Cart {
    constructor(
        public items: CartItem[] = [],
        public customer: Customer
    ) {}

    get cartTotal() {
        const _total = this.items.reduce( (sum, item) => {
            return sum += item.total;
        }, 0);
        return _total;
    }

    get cartQty() {
        const _qty = this.items.reduce( (sum, item) => {
            return sum += item.qty;
        }, 0);
        return _qty;
    }
}
