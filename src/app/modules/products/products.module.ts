import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ProductsService} from './products.service';
import {ProductsEffects} from './store/effects/products.effects';
import {ProductsActions} from './store/actions/products.actions';
import {ProductsListComponent} from './smart-components/list/products-list.component';
import {ProductsEditComponent} from './smart-components/edit/products-edit.component';
import {ProductsMainComponent} from './products-main.component';
import {ProductsRoutingModule} from './products.routing.module';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        ProductsMainComponent,
        ProductsListComponent,
        ProductsEditComponent
    ],
    imports: [
        DataTableModule, SharedModule,
        RouterModule,
        ProductsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        EffectsModule.forFeature([ProductsEffects])
    ],
    providers: [
        ProductsActions,
        ProductsEffects,
        ProductsService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProductsModule {
}
