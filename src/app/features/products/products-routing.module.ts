import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsPageComponent
    },
    {
        path: ':id',
        component: ProductPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
