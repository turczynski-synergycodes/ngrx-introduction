import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Product } from '../../../../base/models/product.interface';
import { addProductToCart } from '../../../../state/cart-items/cart-items.actions';
import { retrievedProductList } from '../../../../state/products/products.actions';
import { selectProducts } from '../../../../state/products/products.selectors';
import { selectProductsCount } from './../../../../state/products/products.selectors';

@Injectable()
export class ProductsGridContainerService {

    constructor(
        private store: Store,
        private httpService: HttpService
    ) { }

    getProducts(): Observable<Product[]> {
        return this.store.pipe(select(selectProducts));
    }

    getProductsCount(): Observable<number> {
        return this.store.pipe(select(selectProductsCount));
    };

    feedProducts(): void {
        this.httpService.getProducts()
            .subscribe((products) => this.store.dispatch(retrievedProductList( { products })));
    }

    addProductToCart(product: Product): void {
        this.store.dispatch(addProductToCart( { product }));
    }
}
