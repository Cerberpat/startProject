import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ProductsService} from './products.service';
import {ProductsEffects} from './effects/products.effects';
import {ProductsActions} from './actions/products.actions';
import {ProductsListComponent} from '../smart-components/list/products-list.component';
import {ProductsMainComponent} from './products-main.component';
import {ProductsRoutingModule} from './products.routing.module';

@NgModule({
    declarations: [
        ProductsMainComponent,
        ProductsListComponent
    ],
    imports: [
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
    ]
})

export class ProductsModule {
}
