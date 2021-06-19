import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartGridComponent } from './shopping-cart-grid.component';
import { ShoppingCartRoutingModule } from '../../shopping-cart-routing.module';

@NgModule({
    declarations: [
        ShoppingCartGridComponent
    ],
    exports: [
        ShoppingCartGridComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        ShoppingCartRoutingModule
    ],
})
export class ShoppingCartGridModule {}
