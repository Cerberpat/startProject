import {ProductsActions} from '../actions/products.actions';
import {IAction} from "../../../../comon/action";
import {ProductsPayloadModel} from "../model/products-payload.model";

const aa:ProductsPayloadModel[] = [
    new ProductsPayloadModel({id: 1, kategoria: 1, nazwa: 'string', magazyn: 1, cena: 1})
];

export const productsListReducer = (state: ProductsPayloadModel[] = aa, action: IAction): ProductsPayloadModel[] => {
    switch (action.type) {
        case ProductsActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
