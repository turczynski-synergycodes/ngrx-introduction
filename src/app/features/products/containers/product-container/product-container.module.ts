
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container.component';
import { ProductModule } from '../../components/product/product.module';

@NgModule({
    declarations: [
        ProductContainerComponent
    ],
    exports: [
        ProductContainerComponent
    ],
    imports: [
        CommonModule,
        ProductModule
    ],
})
export class ProductContainerModule {}
