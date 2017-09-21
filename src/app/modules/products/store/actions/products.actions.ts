import {Injectable} from '@angular/core';
import {ProductsPayloadModel} from '../model/products-payload.model';
import {IAction} from "../../../../comon/action";

@Injectable()
export class ProductsActions {
    public static LOAD_LIST = '[Products] LOAD_LIST';
    public static LOAD_LIST_SUCCESS = '[Products] LOAD_LIST_SUCCESS';
    public static LOAD_LIST_FAILED = '[Products] LOAD_LIST_FAILED';
    public static LOAD_ITEM = '[Products] LOAD_ITEM';
    public static LOAD_ITEM_SUCCESS = '[Products] LOAD_ITEM_SUCCESS';
    public static LOAD_ITEM_FAILED = '[Products] LOAD_ITEM_FAILED';
    public static SAVE_ITEM = '[Products] SAVE_ITEM';
    public static SAVE_ITEM_SUCCESS = '[Products] SAVE_ITEM_SUCCESS';
    public static SAVE_ITEM_FAILED = '[Products] SAVE_ITEM_FAILED';
    
    public loadList(): IAction {
        return {
            type: ProductsActions.LOAD_LIST,
            payload: null
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
    
    public loadItem(id: number): IAction {
        return {
            type: ProductsActions.LOAD_ITEM,
            payload: id
        };
    }

    public loadItemSuccess(payload: ProductsPayloadModel): IAction {
        return {
            type: ProductsActions.LOAD_ITEM_SUCCESS,
            payload: payload
        };
    }

    public loadItemFailed(payload: any): IAction {
        return {
            type: ProductsActions.LOAD_ITEM_FAILED,
            payload
        };
    }
    
    public saveItem(payload: ProductsPayloadModel): IAction {
        return {
            type: ProductsActions.SAVE_ITEM,
            payload: payload
        };
    }

    public saveItemSuccess(): IAction {
        return {
            type: ProductsActions.SAVE_ITEM_SUCCESS,
            payload: null
        };
    }

    public saveItemFailed(payload: any): IAction {
        return {
            type: ProductsActions.SAVE_ITEM_FAILED,
            payload
        };
    }
}
