import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../../../../base/consts/products-data';
import { addProductToCart } from '../../../../state/cart-items/cart-items.actions';
import { Product } from '../../../../base/models/product.interface';

@Injectable()
export class ProductContainerService {

    constructor(private store: Store) {}

    getProduct(productId: number): Observable<Product> {
        return of(PRODUCTS.find((p) => p.id === productId));
    }

    addProductToCart(product: Product): void {
        this.store.dispatch(addProductToCart({ product }));
    }
}
