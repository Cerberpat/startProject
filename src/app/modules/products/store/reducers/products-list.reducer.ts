import {ProductsActions} from '../actions/products.actions';
import {IAction} from "../../../../comon/action";
import {ProductsPayloadModel} from "../model/products-payload.model";

export const productsListReducer = (state: ProductsPayloadModel[] = [], action: IAction): ProductsPayloadModel[] => {
    switch (action.type) {
        case ProductsActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
