import { createAction, props } from '@ngrx/store';
import { Product } from '../../base/models/product.interface';

export const retrievedProductList = createAction(
    '[Products] Retrieved products',
    props<{ products: Product[] }>()
);

export const retrieveProductList = createAction('[Products] Retrieve products');
