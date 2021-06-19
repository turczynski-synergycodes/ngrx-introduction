import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary.component';


@NgModule({
    declarations: [
        ShoppingCartSummaryComponent
    ],
    exports: [
        ShoppingCartSummaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
})
export class ShoppingCartSummaryModule {}
