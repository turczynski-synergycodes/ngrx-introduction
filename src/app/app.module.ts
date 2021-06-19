import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartIconContainerModule } from './features/cart-icon/containers/cart-icon-container/cart-icon-container.module';
import { productsReducer } from './state/products/products.reducer';
import { cartItemsReducer } from './state/cart-items/cart-items.reducer';
import { BaseModule } from './base/base.module';
import { environment } from './../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BaseModule,
        BrowserAnimationsModule,
        CartIconContainerModule,
        StoreModule.forRoot({
            productsState: productsReducer,
            cartItemsState: cartItemsReducer
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
