import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../base/models/cartItem.interface';
import { Product } from '../../base/models/product.interface';

export const addProductToCart = createAction(
    '[Cart Items] Add product to cart',
    props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
    '[Cart Items] Remove product from cart',
    props<{ product: Product }>()
);

export const increaseCartItemQuantity = createAction(
    '[Cart Items] Increase cart item quantity',
    props<{ cartItem: CartItem }>()
);

export const decreaseCartItemQuantity = createAction(
    '[Cart Items] Decrease cart item quantity',
    props<{ cartItem: CartItem }>()
);