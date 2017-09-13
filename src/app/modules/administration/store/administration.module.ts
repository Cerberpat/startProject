import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {AdministrationService} from './administration.service';
import {AdministrationEffects} from './effects/administration.effects';
import {AdministrationActions} from './actions/administration.actions';
import {AdministrationListComponent} from '../smart-components/list/administration-list.component';
import {AdministrationMainComponent} from './administration-main.component';
import {AdministrationRoutingModule} from './administration.routing.module';

@NgModule({
    declarations: [
        AdministrationMainComponent,
        AdministrationListComponent
    ],
    imports: [
        RouterModule,
        AdministrationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        EffectsModule.forFeature([AdministrationEffects])
    ],
    providers: [
        AdministrationActions,
        AdministrationEffects,
        AdministrationService
    ]
})

export class AdministrationModule {
}
