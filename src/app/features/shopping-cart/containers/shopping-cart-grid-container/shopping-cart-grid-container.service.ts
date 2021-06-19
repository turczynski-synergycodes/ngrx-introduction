import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CartItem } from '../../../../base/models/cartItem.interface';
import { removeProductFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } from '../../../../state/cart-items/cart-items.actions';
import { selectCartItems } from '../../../../state/cart-items/cart-items.selectors';

@Injectable()
export class ShoppingCartGridContainerService {
    constructor(private store: Store) {}

    getCartItems(): Observable<CartItem[]> {
        return this.store.pipe(select(selectCartItems));
    }

    removeCartItem(cartItem: CartItem): void {
        return this.store.dispatch(removeProductFromCart({ product: cartItem.product }));
    }

    increaseCartItemQuantity(cartItem: CartItem): void {
        return this.store.dispatch(increaseCartItemQuantity({ cartItem }));
    }

    decreaseCartItemQuantity(cartItem: CartItem): void {
        return this.store.dispatch(decreaseCartItemQuantity({ cartItem }));
    }
}
