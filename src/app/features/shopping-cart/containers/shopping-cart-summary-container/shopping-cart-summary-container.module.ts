import { ShoppingCartSummaryModule } from './../../components/shopping-cart-summary/shopping-cart-summary.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartSummaryContainerComponent } from './shopping-cart-summary-container.component';

@NgModule({
    declarations: [
        ShoppingCartSummaryContainerComponent
    ],
    exports: [
        ShoppingCartSummaryContainerComponent
    ],
    imports: [
        CommonModule,
        ShoppingCartSummaryModule
    ],
})
export class ShoppingCartSummaryContainerModule {}
