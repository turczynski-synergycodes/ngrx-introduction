import { routerNavigatedAction, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../../base/models/product.interface';
import { retrievedProductList } from './products.actions';

export interface ProductsStateModel {
    products: Product[],
    productsCount: number
}

export const initialState: ProductsStateModel = {
    products: [],
    productsCount: 0
};

export const productsReducer = createReducer(
    initialState,
    on(retrievedProductList, (state, { products }) => onRetrievedProductList(state, products)),
    on(routerNavigatedAction, (state, { payload }) => {
        if (payload.event.urlAfterRedirects === '/products')
        console.log('Products page navigated');
        return state;
    }),
);

const onRetrievedProductList = (state: ProductsStateModel, products: Product[]): ProductsStateModel => {
    return {
        ...state, 
        products,
        productsCount: products.length
    };
}