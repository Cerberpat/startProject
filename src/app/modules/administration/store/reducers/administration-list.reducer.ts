import {AdministrationViewModel} from '../model/view/administration-view.model';
import {IAction} from "../../../../comon/action";

export function administrationListReducer(state: AdministrationViewModel[] = [], action: IAction): AdministrationViewModel[] {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
