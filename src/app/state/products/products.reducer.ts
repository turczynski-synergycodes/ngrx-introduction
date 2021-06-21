import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../../base/models/product.interface';
import { retrievedProductList } from './products.actions';

export interface ProductsStateModel extends EntityState<Product> {
    productsCount: number;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
    // additional entity state properties
    productsCount: 0
});

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
    const emptyProductsState = adapter.removeAll(state);
    const updatedProductsState = adapter.addMany(products, emptyProductsState);
    updatedProductsState.productsCount = products.length;

    return updatedProductsState;
}