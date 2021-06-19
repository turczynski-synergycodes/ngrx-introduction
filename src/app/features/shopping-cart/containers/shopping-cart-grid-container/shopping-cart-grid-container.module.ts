import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartGridContainerComponent } from './shopping-cart-grid-container.component';
import { ShoppingCartGridModule } from './../../components/shopping-cart-grid/shopping-cart-grid.module';

@NgModule({
    declarations: [
        ShoppingCartGridContainerComponent
    ],
    exports: [
        ShoppingCartGridContainerComponent
    ],
    imports: [
        CommonModule,
        ShoppingCartGridModule
    ],
})
export class ShoppingCartGridContainerModule {}
