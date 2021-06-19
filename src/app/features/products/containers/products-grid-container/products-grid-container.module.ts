import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridContainerComponent } from './products-grid-container.component';
import { ProductCardModule } from '../../components/product-card/product-card.module';

@NgModule({
    declarations: [
        ProductsGridContainerComponent
    ],
    exports: [
        ProductsGridContainerComponent
    ],
    imports: [
        CommonModule,
        ProductCardModule
    ],
})
export class ProductsGridContainerModule {}
