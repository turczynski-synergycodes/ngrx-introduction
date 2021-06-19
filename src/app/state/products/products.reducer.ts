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
    on(retrievedProductList, (state, { products }) => onRetrievedProductList(state, products))
);

const onRetrievedProductList = (state: ProductsStateModel, products: Product[]): ProductsStateModel => {
    return {
        ...state, 
        products,
        productsCount: products.length
    };
}