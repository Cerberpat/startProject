import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdministrationMainComponent} from './administration-main.component';
import {AdministrationListComponent} from '../smart-components/list/administration-list.component';

export const ROUTES: Routes = [{
    path: 'administration', component: AdministrationMainComponent,
    children: [
        {path: '', component: AdministrationListComponent}
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

export class AdministrationRoutingModule {
}
