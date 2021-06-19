import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-shopping-cart-page',
    templateUrl: './shopping-cart-page.component.html',
    styleUrls: ['./shopping-cart-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartPageComponent {}
