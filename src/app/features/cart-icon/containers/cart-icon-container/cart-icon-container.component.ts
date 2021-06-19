import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../../../base/models/cartItem.interface';
import { CartIconContainerService } from './cart-icon-container.service';


@Component({
    selector: 'app-cart-icon-container',
    templateUrl: './cart-icon-container.component.html',
    providers: [CartIconContainerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartIconContainerComponent implements OnInit {

    cartItems$: Observable<CartItem[]>;

    constructor(private service: CartIconContainerService) {}

    ngOnInit(): void {
        this.cartItems$ = this.service.getCartItems();
    }
}
