import {Injectable} from '@angular/core';
import {InvoicesPayloadModel} from '../model/payload/invoices-payload.model';
import {IAction} from "../../../../comon/action";

@Injectable()
export class InvoicesActions {
    public static LOAD_LIST = '[Invoices] LOAD_LIST';
    public static LOAD_LIST_SUCCESS = '[Invoices] LOAD_LIST_SUCCESS';
    public static LOAD_LIST_FAILED = '[Invoices] LOAD_LIST_FAILED';

    public loadList(): any {
        return {
            type: InvoicesActions.LOAD_LIST
        };
    }

    public loadListSuccess(payload: InvoicesPayloadModel[]): IAction {
        return {
            type: InvoicesActions.LOAD_LIST_SUCCESS,
            payload: payload
        };
    }

    public loadListFailed(payload: any): IAction {
        return {
            type: InvoicesActions.LOAD_LIST_FAILED,
            payload
        };
    }
}
