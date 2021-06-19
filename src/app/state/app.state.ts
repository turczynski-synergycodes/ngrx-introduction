import { ProductsStateModel } from './products/products.reducer';
import { CartItemsStateModel } from './cart-items/cart-items.reducer';

export interface AppStateModel {
    productsState: ProductsStateModel,
    cartItemsState: CartItemsStateModel
}