import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartSummaryContainerService } from './shopping-cart-summary-container.service';

@Component({
    selector: 'app-shopping-cart-summary-container',
    templateUrl: './shopping-cart-summary-container.component.html',
    providers: [ ShoppingCartSummaryContainerService ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartSummaryContainerComponent implements OnInit {

    orderTotal$: Observable<number>;

    constructor(private service: ShoppingCartSummaryContainerService) {}

    ngOnInit(): void {
        this.orderTotal$ = this.service.getOrderTotal();
    }
}
