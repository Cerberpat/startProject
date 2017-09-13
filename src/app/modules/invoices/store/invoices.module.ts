import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {InvoicesService} from './invoices.service';
import {InvoicesEffects} from './effects/invoices.effects';
import {InvoicesActions} from './actions/invoices.actions';
import {InvoicesListComponent} from '../smart-components/list/invoices-list.component';
import {InvoicesMainComponent} from './invoices-main.component';
import {InvoicesRoutingModule} from './invoices.routing.module';

@NgModule({
    declarations: [
        InvoicesMainComponent,
        InvoicesListComponent
    ],
    imports: [
        RouterModule,
        InvoicesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        EffectsModule.forFeature([InvoicesEffects])
    ],
    providers: [
        InvoicesActions,
        InvoicesEffects,
        InvoicesService
    ]
})

export class InvoicesModule {
}
