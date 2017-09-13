import {InvoicesViewModel} from '../model/view/invoices-view.model';
import {InvoicesActions} from '../actions/invoices.actions';
import {IAction} from "../../../../comon/action";

export const invoicesListReducer = (state: InvoicesViewModel[] = [], action: IAction): InvoicesViewModel[] => {
    switch (action.type) {
        case InvoicesActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
