import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../../base/models/product.interface';
import { ProductsGridContainerService } from './products-grid-container.service';

@Component({
    selector: 'app-products-grid-container',
    templateUrl: './products-grid-container.component.html',
    styleUrls: ['./products-grid-container.component.scss'],
    providers: [ProductsGridContainerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsGridContainerComponent implements OnInit {

    products$: Observable<Product[]>;
    productsCount$: Observable<number>;

    constructor(private service: ProductsGridContainerService) {}

    ngOnInit(): void {
        this.service.feedProducts();
        this.products$ = this.service.getProducts();
        this.productsCount$ = this.service.getProductsCount();
    }

    addProductToCart(product: Product): void {
        this.service.addProductToCart(product);
    }
}
