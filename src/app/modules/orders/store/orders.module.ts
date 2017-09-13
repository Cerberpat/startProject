import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {OrdersService} from './orders.service';
import {OrdersEffects} from './effects/orders.effects';
import {OrdersActions} from './actions/orders.actions';
import {OrdersListComponent} from '../smart-components/list/orders-list.component';
import {OrdersMainComponent} from './orders-main.component';
import {OrdersRoutingModule} from './orders.routing.module';

@NgModule({
    declarations: [
        OrdersMainComponent,
        OrdersListComponent
    ],
    imports: [
        RouterModule,
        OrdersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        EffectsModule.forFeature([OrdersEffects])
    ],
    providers: [
        OrdersActions,
        OrdersEffects,
        OrdersService
    ]
})

export class OrdersModule {
}
