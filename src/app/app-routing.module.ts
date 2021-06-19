import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './base/pages/not-found/not-found-page.component';

const routes: Routes = [
    {
        path: 'products',
        loadChildren: () =>
            import('./features/products/products.module').then((m) => m.ProductsModule),
    },
    {
        path: 'shopping-cart',
        loadChildren: () =>
            import('./features/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundPageComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
