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

    @Effect() private list$: Observable<IAction> = this.actions$
    .ofType(ProductsActions.LOAD_LIST)
    .switchMap(() => {
        return this.productsService.list()
            .map((response: ProductsPayloadModel[]) => {
                return this.productsActions.loadListSuccess(response);
            })
            .catch((err) => {
                return of(this.productsActions.loadListFailed(err));
            });
    });
    
    @Effect() private item$: Observable<IAction> = this.actions$
        .ofType(ProductsActions.LOAD_ITEM)
        .switchMap((action) => {
            return this.productsService.item((action as IAction).payload)
                .map((response: ProductsPayloadModel) => {
                    return this.productsActions.loadItemSuccess(response);
                })
                .catch((err) => {
                    return of(this.productsActions.loadItemFailed(err));
                });
        });

    @Effect() private save$: Observable<IAction> = this.actions$
        .ofType(ProductsActions.SAVE_ITEM)
        .switchMap((action) => {
            return this.productsService.save((action as IAction).payload)
                .map(() => {
                    return this.productsActions.saveItemSuccess();
                })
                .catch((err) => {
                    return of(this.productsActions.saveItemFailed(err));
                });
        });

    constructor(private actions$: Actions,
                private productsActions: ProductsActions,
                private productsService: ProductsService) {
    }
}
