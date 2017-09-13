import {Injectable} from '@angular/core';
import {ProductsPayloadModel} from '../model/payload/products-payload.model';
import {IAction} from "../../../../comon/action";

@Injectable()
export class ProductsActions {
    public static LOAD_LIST = '[Products] LOAD_LIST';
    public static LOAD_LIST_SUCCESS = '[Products] LOAD_LIST_SUCCESS';
    public static LOAD_LIST_FAILED = '[Products] LOAD_LIST_FAILED';

    public loadList(): any {
        return {
            type: ProductsActions.LOAD_LIST
        };
    }

    public loadListSuccess(payload: ProductsPayloadModel[]): IAction {
        return {
            type: ProductsActions.LOAD_LIST_SUCCESS,
            payload: payload
        };
    }

    public loadListFailed(payload: any): IAction {
        return {
            type: ProductsActions.LOAD_LIST_FAILED,
            payload
        };
    }
}
