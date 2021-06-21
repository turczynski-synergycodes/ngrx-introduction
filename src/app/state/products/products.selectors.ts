import { ProductsStateModel } from './products.reducer';
import { AppStateModel } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectProducts = createSelector(
    (state: AppStateModel) => state.productsState,
    ((products: ProductsStateModel) => products.ids.map(id => products.entities[id]))
);

export const selectProductsCount = createSelector(
    (state: AppStateModel) => state.productsState.productsCount,
    ((productsCount: number) => productsCount)
);