import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoicesMainComponent} from './invoices-main.component';
import {InvoicesListComponent} from '../smart-components/list/invoices-list.component';

export const ROUTES: Routes = [{
    path: 'invoices', component: InvoicesMainComponent,
    children: [
        {path: '', component: InvoicesListComponent}
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

export class InvoicesRoutingModule {
}
