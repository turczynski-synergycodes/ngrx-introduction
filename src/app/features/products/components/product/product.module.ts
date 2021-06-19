import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
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
        MatButtonModule      
    ],
})
export class ProductModule {}
