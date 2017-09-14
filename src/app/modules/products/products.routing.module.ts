import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsMainComponent} from './products-main.component';
import {ProductsListComponent} from './smart-components/list/products-list.component';

export const ROUTES: Routes = [{
    path: 'products', component: ProductsMainComponent,
    children: [
        {path: '', component: ProductsListComponent}
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {
}
