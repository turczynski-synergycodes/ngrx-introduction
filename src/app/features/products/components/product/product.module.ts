import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveComponentModule } from '@ngrx/component';
import { ProductComponent } from './product.component';

@NgModule({
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveComponentModule
    ],
})
export class ProductModule {}
