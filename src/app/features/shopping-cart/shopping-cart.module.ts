import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartGridContainerModule } from './containers/shopping-cart-grid-container/shopping-cart-grid-container.module';
import { ShoppingCartSummaryContainerModule } from './containers/shopping-cart-summary-container/shopping-cart-summary-container.module';

@NgModule({
    declarations: [
        ShoppingCartPageComponent
    ],
    imports: [
        CommonModule,
        ShoppingCartGridContainerModule,
        ShoppingCartSummaryContainerModule,
    ],
})
export class ShoppingCartModule {}
