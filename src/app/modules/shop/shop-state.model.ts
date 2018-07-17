import { Product } from './product-list/product-item/product';
import { Cart } from './cart/cart';
import { WishlistItem } from './wish-list/wish-list-item/wish-list-item';

export class ShopStateModel {
    productList: Product[];
    cart: Cart;
    wishlist: WishlistItem[];
}
