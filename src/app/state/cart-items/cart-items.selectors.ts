import { AppStateModel } from './../app.state';
import { createSelector } from '@ngrx/store';
import { CartItem } from '../../base/models/cartItem.interface';
import { CartItemsStateModel } from './cart-items.reducer';

const selectCartItemsState = (state: AppStateModel) => state.cartItemsState;

export const selectCartItems = createSelector(
    selectCartItemsState,
    ((cartItemsState: CartItemsStateModel) => cartItemsState.cartItems)
);

export const selectTotalPrice = createSelector(
    (state: AppStateModel) => state.cartItemsState.totalPrice,
    ((totalPrice: number) => totalPrice)
);

export const selectTotalQuantity = createSelector(
    (state: AppStateModel) => state.cartItemsState.totalQuantity,
    ((totalQuantity: number) => totalQuantity)
);