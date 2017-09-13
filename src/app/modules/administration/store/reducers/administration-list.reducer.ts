import {AdministrationViewModel} from '../model/view/administration-view.model';
import {AdministrationActions} from '../actions/administration.actions';
import {IAction} from "../../../../comon/action";

export const administrationListReducer = (state: AdministrationViewModel[] = [], action: IAction): AdministrationViewModel[] => {
    switch (action.type) {
        case AdministrationActions.LOAD_LIST_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
