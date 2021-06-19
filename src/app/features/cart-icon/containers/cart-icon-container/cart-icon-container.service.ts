import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartItem } from '../../../../base/models/cartItem.interface';
import { selectCartItems } from '../../../../state/cart-items/cart-items.selectors';


@Injectable()
export class CartIconContainerService {
    constructor(private store: Store) {}

    getCartItems(): Observable<CartItem[]> {
        return this.store.pipe(select(selectCartItems));
    }
}
