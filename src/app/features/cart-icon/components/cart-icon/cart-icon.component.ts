import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartItem } from '../../../../base/models/cartItem.interface';

@Component({
    selector: 'app-cart-icon',
    templateUrl: './cart-icon.component.html',
    styleUrls: ['./cart-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartIconComponent {

    get cartItems(): CartItem[] {
        return this._cartItems;
    }

    @Input()
    set cartItems(value: CartItem[]) {
        this._cartItems = value;

        if (!value) {
            this.cartItemsCount = null;
            return;
        }
        const quantity = value.reduce((a, b) => a + b.quantity, 0);
        this.cartItemsCount = quantity ? quantity : null;
    }
    private _cartItems: CartItem[];

    cartItemsCount: number;
}
