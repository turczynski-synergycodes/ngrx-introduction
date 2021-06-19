import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Product } from '../../../../base/models/product.interface';
import { ProductContainerService } from './product-container.service';

@Component({
    selector: 'app-product-container',
    templateUrl: './product-container.component.html',
    providers: [ProductContainerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit, OnDestroy {

    product: Product;

    private readonly onDestroy$ = new Subject();

    constructor(
        private route: ActivatedRoute,
        private service: ProductContainerService) {}

    ngOnInit(): void {
        this.route.paramMap.pipe(
            takeUntil(this.onDestroy$),
            map((params) => +params.get('id')),
            switchMap((productId) => this.service.getProduct(productId))
        ).subscribe(p => this.product = p);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    addProductToCart() {
        this.service.addProductToCart(this.product);
    }
}
