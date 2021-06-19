import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../../base/models/product.interface';
import { PRODUCTS } from '../../../base/consts/products-data';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS);
    }
}
