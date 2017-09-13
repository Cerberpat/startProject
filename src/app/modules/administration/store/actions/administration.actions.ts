import {Injectable} from '@angular/core';
import {AdministrationPayloadModel} from '../model/payload/administration-payload.model';
import {IAction} from "../../../../comon/action";

@Injectable()
export class AdministrationActions {
    public static LOAD_LIST = '[Administration] LOAD_LIST';
    public static LOAD_LIST_SUCCESS = '[Administration] LOAD_LIST_SUCCESS';
    public static LOAD_LIST_FAILED = '[Administration] LOAD_LIST_FAILED';

    public loadList(): any {
        return {
            type: AdministrationActions.LOAD_LIST
        };
    }

    public loadListSuccess(payload: AdministrationPayloadModel[]): IAction {
        return {
            type: AdministrationActions.LOAD_LIST_SUCCESS,
            payload: payload
        };
    }

    public loadListFailed(payload: any): IAction {
        return {
            type: AdministrationActions.LOAD_LIST_FAILED,
            payload
        };
    }
}
