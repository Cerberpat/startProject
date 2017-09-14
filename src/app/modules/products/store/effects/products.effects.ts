import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {ProductsActions} from '../actions/products.actions';
import {ProductsService} from '../../products.service';
import {IAction} from "../../../../comon/action";
import 'rxjs/add/operator/switchMap';
import {ProductsPayloadModel} from "../model/products-payload.model";

@Injectable()
export class ProductsEffects {

    @Effect() private list$: Observable<IAction> = this.update$
        .ofType(ProductsActions.LOAD_LIST)
        .switchMap(() => {
            return this.service.list()
                .map((response: ProductsPayloadModel[]) => {
                    return this.actions.loadListSuccess(response);
                })
                .catch((err) => {
                    return of(err);
                });
        });

    constructor(private update$: Actions,
                private actions: ProductsActions,
                private service: ProductsService) {
    }
}
