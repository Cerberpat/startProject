import {OrdersViewModel} from '../model/view/orders-view.model';
import {OrdersActions} from '../actions/orders.actions';
import {IAction} from "../../../../comon/action";

export const ordersListReducer = (state: OrdersViewModel[] = [], action: IAction): OrdersViewModel[] => {
    switch (action.type) {
        case OrdersActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
