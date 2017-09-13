import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {ProductsActions} from '../actions/products.actions';
import {ProductsService} from '../products.service';
import {productssPayloadToViewModel} from '../utilites/products-payload-utilites';
import {ProductsViewModel} from '../model/view/products-view.model';
import {IAction} from "../../../../comon/action";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductsEffects {

    @Effect() private list$: Observable<IAction> = this.update$
        .ofType(ProductsActions.LOAD_LIST)
        .switchMap(() => {
            return this.service.list()
                .map((response) => {
                    const models: ProductsViewModel[] = productssPayloadToViewModel(response.json().payload.content);
                    return this.actions.loadListSuccess(models);
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
