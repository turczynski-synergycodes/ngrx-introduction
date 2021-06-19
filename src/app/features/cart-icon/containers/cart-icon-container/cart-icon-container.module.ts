import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIconModule } from '../../components/cart-icon/cart-icon.module';
import { CartIconContainerComponent } from './cart-icon-container.component';


@NgModule({
    declarations: [
        CartIconContainerComponent
    ],
    exports: [
        CartIconContainerComponent
    ],
    imports: [
        CommonModule,
        CartIconModule
    ],
})
export class CartIconContainerModule {}
