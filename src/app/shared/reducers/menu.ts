import {MenuModel} from '../models/MenuModel';
import * as cardsActions from '../actions/menus';

export const initialState: MenuModel[] = [{
  id: 'a',
  title: 'a',
  menu_id: 'a'
}, {
  id: 'b',
  title: 'b',
  menu_id: 'b'
}];

export default function reducer(state = [], action: any): MenuModel[] {
  switch (action.type) {
    case cardsActions.GET_MENU_SUCCESS:
      return action.payload;
    case cardsActions.ADD_MENU:
      return  [ ...state, action.payload ];
    default: {
      return state;
    }
  }
}
