import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { retrievedProductList, retrieveProductList } from './../state/products/products.actions';

@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(retrieveProductList),
            mergeMap(() =>
                this.httpService.getProducts().pipe(
                    map((products) => retrievedProductList({ products })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private httpService: HttpService) {}
}
