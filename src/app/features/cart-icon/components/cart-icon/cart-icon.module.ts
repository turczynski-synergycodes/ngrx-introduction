import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartIconComponent } from './cart-icon.component';

@NgModule({
  declarations: [
      CartIconComponent
  ],
  exports: [
    CartIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class CartIconModule { }
