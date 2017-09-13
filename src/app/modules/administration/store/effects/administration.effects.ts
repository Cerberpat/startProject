import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {AdministrationActions} from '../actions/administration.actions';
import {AdministrationService} from '../administration.service';
import {administrationsPayloadToViewModel} from '../utilites/administration-payload-utilites';
import {AdministrationViewModel} from '../model/view/administration-view.model';
import {IAction} from "../../../../comon/action";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdministrationEffects {

    @Effect() private list$: Observable<IAction> = this.update$
        .ofType(AdministrationActions.LOAD_LIST)
        .switchMap(() => {
            return this.service.list()
                .map((response) => {
                    const models: AdministrationViewModel[] = administrationsPayloadToViewModel(response.json().payload.content);
                    return this.actions.loadListSuccess(models);
                })
                .catch((err) => {
                    return of(err);
                });
        });

    constructor(private update$: Actions,
                private actions: AdministrationActions,
                private service: AdministrationService) {
    }
}
