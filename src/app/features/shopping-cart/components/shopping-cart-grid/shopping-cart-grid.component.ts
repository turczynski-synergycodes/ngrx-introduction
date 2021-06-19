
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../../../base/models/cartItem.interface';

@Component({
    selector: 'app-shopping-cart-grid',
    templateUrl: './shopping-cart-grid.component.html',
    styleUrls: ['./shopping-cart-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartGridComponent implements OnInit {

    displayedColumns: string[] = ['product', 'price', 'quantity', 'total'];

    @Input()
    cartItems: CartItem[];

    @Output()
    removeCartItem = new EventEmitter<CartItem>();

    @Output()
    increaseCartItemQuantity = new EventEmitter<CartItem>();

    @Output()
    decreaseCartItemQuantity = new EventEmitter<CartItem>();

    constructor(private router: Router) {}

    ngOnInit(): void {}

    navigateToProduct(productId: number): void {
        this.router.navigate(['products', productId]);
    }
}
