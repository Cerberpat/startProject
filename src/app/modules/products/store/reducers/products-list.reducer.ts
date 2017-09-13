import {ProductsViewModel} from '../model/view/products-view.model';
import {ProductsActions} from '../actions/products.actions';
import {IAction} from "../../../../comon/action";

export const productsListReducer = (state: ProductsViewModel[] = [], action: IAction): ProductsViewModel[] => {
    switch (action.type) {
        case ProductsActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
