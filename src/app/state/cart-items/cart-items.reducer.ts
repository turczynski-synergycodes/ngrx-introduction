import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../../base/models/product.interface';
import { CartItem } from '../../base/models/cartItem.interface';
import { addProductToCart, removeProductFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } from './cart-items.actions';

export interface CartItemsStateModel {
    cartItems: CartItem[],
    totalQuantity: number,
    totalPrice: number
}

export const initialState: CartItemsStateModel = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
};

export const cartItemsReducer = createReducer(
    initialState,
    on(addProductToCart, (state, { product }) => onAddProductToCart(state, product)),
    on(removeProductFromCart, (state, { product }) => onRemoveProductFromCart(state, product)),    
    on(increaseCartItemQuantity, (state, { cartItem }) => onIncreaseCartItemQuantity(state, cartItem)),
    on(decreaseCartItemQuantity, (state, { cartItem }) => onDecreaseCartItemQuantity(state, cartItem)),
);

const onAddProductToCart = (state: CartItemsStateModel, product: Product): CartItemsStateModel => {    
    let productInCart = false;
    let cartItems = state.cartItems.map(cartItem => {
        if (cartItem.product.id === product.id) {
            productInCart = true;
            return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem;
    });
    if (!productInCart) 
        cartItems = [...cartItems, { product, quantity: 1 }];

    return {
        cartItems,
        totalPrice: calculateTotalPrice(cartItems),
        totalQuantity: calculateTotalQuantity(cartItems)
    };
}

const onRemoveProductFromCart = (state: CartItemsStateModel, product: Product): CartItemsStateModel => {
    const cartItems = state.cartItems.filter(cartItem => cartItem.product.id !== product.id);
    
    return {
        ...state,
        cartItems,
        totalPrice: calculateTotalPrice(cartItems),
        totalQuantity: calculateTotalQuantity(cartItems)
    };
}

const onIncreaseCartItemQuantity = (state: CartItemsStateModel, cartItem: CartItem): CartItemsStateModel => {
    const cartItems = state.cartItems.map(item => {
        if (item !== cartItem) {
            return item;
        }
        else {
            const updatedCartItem = {
                ...cartItem,
                quantity: cartItem.quantity + 1
            };
            return updatedCartItem;
        }
    });

    return {
        ...state,
        cartItems,
        totalPrice: calculateTotalPrice(cartItems),
        totalQuantity: calculateTotalQuantity(cartItems)
    };
}

const onDecreaseCartItemQuantity = (state: CartItemsStateModel, cartItem: CartItem): CartItemsStateModel => {
    const cartItems = state.cartItems.map(item => {
        if (item !== cartItem) {
            return item;
        }
        else {
            const updatedCartItem = {
                ...cartItem,
                quantity: cartItem.quantity < 2 ? 1 : cartItem.quantity - 1
            };
            return updatedCartItem;
        }
    });

    return {
        ...state,
        cartItems,
        totalPrice: calculateTotalPrice(cartItems),
        totalQuantity: calculateTotalQuantity(cartItems)
    };
}

const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

const calculateTotalQuantity = (cartItems: CartItem[]): number => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}