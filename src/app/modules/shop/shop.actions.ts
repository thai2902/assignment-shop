import { Product } from './product-list/product-item/product';
import { WishlistItem } from './wish-list/wish-list-item/wish-list-item';
import { CartItem } from './cart/cart-item/cart-item';


export class LoadProductList {
    static type = '[Shop] LoadProductList';
}

export class ProductListLoaded {
    static type = '[Shop] ProductListLoaded';
    productList: Product[];

    constructor(productList: Product[]) {
        this.productList = productList;
    }
}

export class ShowAddToCartPopup {
    static type = '[Shop] ShowAddToCartPopup';
    product: Product;
    constructor(product: Product) {
        this.product = product;
    }
}

export class AddToCart {
    static type = '[Shop] AddToCart';
    cartItem: CartItem;
    constructor(cartItem: CartItem) {
        this.cartItem = cartItem;
    }
}

export class RemoveCartItem {
    static type = '[Shop] RemoveCartItem';
    cartItem: CartItem;
    constructor(cartItem: CartItem) {
        this.cartItem = cartItem;
    }
}

export class CartChangeQty {
    static type = '[Shop] CartChangeQty';
    constructor() {}
}

export class LoadWishlist {
    static type = '[Shop] LoadWishlist';
}


export class AddToWishlist {
    static type = '[Shop] AddToWishlist';
    item: WishlistItem;
    constructor(item: WishlistItem) {
        this.item = item;
    }
}

export class RemoveFromWishlist {
    static type = '[Shop] RemoveFromWishlist';
    item: WishlistItem;
    constructor(item: WishlistItem) {
        this.item = item;
    }
}
