import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../base/models/product.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

    @Input()
    product: Product;

    @Output()
    addProductToCart = new EventEmitter<Product>();

    constructor(private router: Router) {}

    addToCart(event: MouseEvent): void {
        this.addProductToCart.emit(this.product);
        event.stopPropagation();
    }

    navigateToProduct(): void {
        this.router.navigate(['products', this.product.id]);
    }
}
