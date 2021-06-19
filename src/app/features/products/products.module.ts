import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsGridContainerModule } from './containers/products-grid-container/products-grid-container.module';
import { ProductContainerModule } from './containers/product-container/product-container.module';

@NgModule({
    declarations: [
        ProductsPageComponent,
        ProductPageComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ProductsGridContainerModule,
        ProductContainerModule,
    ],
})
export class ProductsModule {}
