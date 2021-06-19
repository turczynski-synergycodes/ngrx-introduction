import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Product } from '../../../../base/models/product.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {

    @Input()
    product: Product;

    @Output()
    addProductToCart = new EventEmitter();

    remainingDiscountSeconds$: Observable<number>;

    private discountTimeInSeconds = 60;

    ngOnInit(): void {
        this.remainingDiscountSeconds$ = timer(0, 1000).pipe(
            map((i) => this.discountTimeInSeconds - i),
            take(this.discountTimeInSeconds + 1),
            tap((x) => console.log(`value ${x} emitted`))
        );
    }
}
