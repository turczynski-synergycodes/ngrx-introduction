import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-shopping-cart-summary',
    templateUrl: './shopping-cart-summary.component.html',
    styleUrls: ['./shopping-cart-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartSummaryComponent {

    @Input()
    orderTotal: number;
}
