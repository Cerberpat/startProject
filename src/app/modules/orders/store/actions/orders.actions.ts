import {Injectable} from '@angular/core';
import {OrdersPayloadModel} from '../model/payload/orders-payload.model';
import {IAction} from "../../../../comon/action";

@Injectable()
export class OrdersActions {
    public static LOAD_LIST = '[Orders] LOAD_LIST';
    public static LOAD_LIST_SUCCESS = '[Orders] LOAD_LIST_SUCCESS';
    public static LOAD_LIST_FAILED = '[Orders] LOAD_LIST_FAILED';

    public loadList(): any {
        return {
            type: OrdersActions.LOAD_LIST
        };
    }

    public loadListSuccess(payload: OrdersPayloadModel[]): IAction {
        return {
            type: OrdersActions.LOAD_LIST_SUCCESS,
            payload: payload
        };
    }

    public loadListFailed(payload: any): IAction {
        return {
            type: OrdersActions.LOAD_LIST_FAILED,
            payload
        };
    }
}
