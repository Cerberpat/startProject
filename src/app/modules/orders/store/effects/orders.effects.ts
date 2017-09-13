import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {OrdersActions} from '../actions/orders.actions';
import {OrdersService} from '../orders.service';
import {orderssPayloadToViewModel} from '../utilites/orders-payload-utilites';
import {OrdersViewModel} from '../model/view/orders-view.model';
import {IAction} from "../../../../comon/action";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class OrdersEffects {

    @Effect() private list$: Observable<IAction> = this.update$
        .ofType(OrdersActions.LOAD_LIST)
        .switchMap(() => {
            return this.service.list()
                .map((response) => {
                    const models: OrdersViewModel[] = orderssPayloadToViewModel(response.json().payload.content);
                    return this.actions.loadListSuccess(models);
                })
                .catch((err) => {
                    return of(err);
                });
        });

    constructor(private update$: Actions,
                private actions: OrdersActions,
                private service: OrdersService) {
    }
}
