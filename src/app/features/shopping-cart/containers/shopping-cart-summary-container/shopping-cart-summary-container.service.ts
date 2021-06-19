import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTotalPrice } from '../../../../state/cart-items/cart-items.selectors';

@Injectable()
export class ShoppingCartSummaryContainerService {
    constructor(private store: Store) {}

    getOrderTotal(): Observable<number> {
        return this.store.pipe(select(selectTotalPrice));
    }
}
