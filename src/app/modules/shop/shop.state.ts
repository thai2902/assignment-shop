import { State, Store, Selector, Action, StateContext } from '@ngxs/store';
import { ShopStateModel } from './shop-state.model';
import { Product } from './product-list/product-item/product';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import * as ShopActions from './shop.actions';
import { Cart } from './cart/cart';
import { WishlistItem } from './wish-list/wish-list-item/wish-list-item';
import { MatDialog } from '@angular/material';
import { PopupAddToCartComponent } from './popup-add-to-cart/popup-add-to-cart.component';
import { NgZone } from '@angular/core';

@State<ShopStateModel>({
    name: 'shop',
    defaults: {
        productList: [],
        cart: new Cart([], undefined),
        wishlist: []
    }
})
export class ShopState {
    constructor(
        private store: Store,
        private http: HttpClient,
        private dialog: MatDialog,
        private zone: NgZone
    ) {

    }

    /**
     * Selectors
     */
    @Selector()
    static getProductList(state: ShopStateModel): Product[] {
        return state.productList;
    }

    @Selector()
    static getCart(state: ShopStateModel): Cart {
        return state.cart;
    }

    @Selector()
    static getWishlist(state: ShopStateModel): WishlistItem[] {
        return state.wishlist;
    }


    /**
     * Actions
     */
    @Action(ShopActions.LoadProductList)
    loadProductList(ctx: StateContext<ShopStateModel>) {
        return this.http.get<Product[]>('/assets/mockdata/product-list.json').pipe(
            tap(data => {
                ctx.dispatch(new ShopActions.ProductListLoaded(data));
            })
        );
    }

    @Action(ShopActions.ProductListLoaded)
    setStateOnProductLoad(ctx: StateContext<ShopStateModel>, event: ShopActions.ProductListLoaded) {
        ctx.patchState({
            productList: [...event.productList]
        });
    }

    @Action(ShopActions.LoadWishlist)
    loadWishlist(ctx: StateContext<ShopStateModel>, event: ShopActions.AddToWishlist) {
        const wishlist = loadWishlistFromLocalStorage();
        ctx.patchState({ wishlist });
    }

    @Action(ShopActions.AddToWishlist)
    addToWishlist(ctx: StateContext<ShopStateModel>, event: ShopActions.AddToWishlist) {
        const state = ctx.getState();
        if (state.wishlist.some(item => item.product.id === event.item.product.id)) {
            return;
        }
        const wishlist = [...state.wishlist, event.item];
        ctx.patchState({ wishlist });
        saveWishlistToLocalStorage(wishlist);
    }

    @Action(ShopActions.RemoveFromWishlist)
    removeFromWishlist(ctx: StateContext<ShopStateModel>, event: ShopActions.RemoveFromWishlist) {
        const state = ctx.getState();
        const idx = state.wishlist.findIndex(item => item.product.id === event.item.product.id);
        if (idx !== -1) {
            state.wishlist.splice(idx, 1);
        }

        const wishlist = [...state.wishlist];
        ctx.patchState({ wishlist });

        saveWishlistToLocalStorage(wishlist);
    }

    @Action(ShopActions.ShowAddToCartPopup)
    showAddToCartPopup(ctx: StateContext<ShopStateModel>, event: ShopActions.ShowAddToCartPopup) {
        this.zone.run(() => {
            this.dialog.open(PopupAddToCartComponent, { data: event.product });
        });
    }

    @Action(ShopActions.AddToCart)
    addToCart(ctx: StateContext<ShopStateModel>, event: ShopActions.AddToCart) {
        const state = ctx.getState();
        let cart: Cart;

        const updateItem = state.cart.items.find(item => item.product.id === event.cartItem.product.id);
        if (updateItem) {
            updateItem.qty += event.cartItem.qty;
            cart = new Cart([...state.cart.items], state.cart.customer);
            ctx.patchState({ cart });
        } else {
            cart = new Cart([...state.cart.items, event.cartItem], state.cart.customer);
        }

        ctx.patchState({ cart });
    }

    @Action(ShopActions.RemoveCartItem)
    removeCartItem(ctx: StateContext<ShopStateModel>, event: ShopActions.RemoveCartItem) {
        const state = ctx.getState();
        const idx = state.cart.items.findIndex(item => item.product.id === event.cartItem.product.id);
        if (idx !== -1) {
            state.cart.items.splice(idx, 1);
        }
        const cart = new Cart([...state.cart.items], state.cart.customer);
        ctx.patchState({ cart });
    }

    @Action(ShopActions.CartChangeQty)
    changeQty(ctx: StateContext<ShopStateModel>, event: ShopActions.RemoveCartItem) {
        const state = ctx.getState();
        const cart = new Cart([...state.cart.items], state.cart.customer);
        ctx.patchState({ cart });
    }

}

export function saveWishlistToLocalStorage(wishList: WishlistItem[] = []) {
    localStorage.setItem('shop_wishlist', JSON.stringify(wishList));
}

export function loadWishlistFromLocalStorage(): WishlistItem[] {
    const wishlistString = localStorage.getItem('shop_wishlist');
    const wishlist: WishlistItem[] = JSON.parse(wishlistString);
    return wishlist || [];
}
