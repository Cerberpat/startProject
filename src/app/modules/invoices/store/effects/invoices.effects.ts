import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {InvoicesActions} from '../actions/invoices.actions';
import {InvoicesService} from '../invoices.service';
import {invoicessPayloadToViewModel} from '../utilites/invoices-payload-utilites';
import {InvoicesViewModel} from '../model/view/invoices-view.model';
import {IAction} from "../../../../comon/action";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class InvoicesEffects {

    @Effect() private list$: Observable<IAction> = this.update$
        .ofType(InvoicesActions.LOAD_LIST)
        .switchMap(() => {
            return this.service.list()
                .map((response) => {
                    const models: InvoicesViewModel[] = invoicessPayloadToViewModel(response.json().payload.content);
                    return this.actions.loadListSuccess(models);
                })
                .catch((err) => {
                    return of(err);
                });
        });

    constructor(private update$: Actions,
                private actions: InvoicesActions,
                private service: InvoicesService) {
    }
}
