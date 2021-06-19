import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShoppingCartGridContainerService } from './shopping-cart-grid-container.service';
import { CartItem } from '../../../../base/models/cartItem.interface';

@Component({
    selector: 'app-shopping-cart-grid-container',
    templateUrl: './shopping-cart-grid-container.component.html',
    providers: [ShoppingCartGridContainerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartGridContainerComponent implements OnInit {

    cartItems$: Observable<CartItem[]>;

    constructor(private service: ShoppingCartGridContainerService) {}

    ngOnInit(): void {
        this.cartItems$ = this.service.getCartItems();
    }

    removeCartItem(cartItem: CartItem): void {
        this.service.removeCartItem(cartItem);
    }

    increaseCartItemQuantity(cartItem: CartItem): void {
        this.service.increaseCartItemQuantity(cartItem);
    }

    decreaseCartItemQuantity(cartItem: CartItem): void {
        this.service.decreaseCartItemQuantity(cartItem);
    }
}
