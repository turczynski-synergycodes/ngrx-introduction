import { AppStateModel } from './../app.state';
import { createSelector } from '@ngrx/store';
import { Product } from '../../base/models/product.interface';

export const selectProducts = createSelector(
    (state: AppStateModel) => state.productsState.products,
    ((products: Product[]) => products)
);

export const selectProductsCount = createSelector(
    (state: AppStateModel) => state.productsState.productsCount,
    ((productsCount: number) => productsCount)
);