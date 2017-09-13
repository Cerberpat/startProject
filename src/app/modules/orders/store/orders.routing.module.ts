import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersMainComponent} from './orders-main.component';
import {OrdersListComponent} from '../smart-components/list/orders-list.component';

export const ROUTES: Routes = [{
    path: 'orders', component: OrdersMainComponent,
    children: [
        {path: '', component: OrdersListComponent}
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

export class OrdersRoutingModule {
}
