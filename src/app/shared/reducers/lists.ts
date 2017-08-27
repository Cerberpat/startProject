import {ListModel} from "../models/ListModel";
import * as cardsActions from '../actions/cards';

export const initialState: ListModel[] = [{
  id: 'a',
  title: 'a'
}, {
  id: 'b',
  title: 'b'
}];

export default function reducer(state = [], action: any): ListModel[] {
  switch (action.type) {
    case cardsActions.GET_LISTS_SUCCESS:
      return action.payload;
    default: {
      return state;
    }
  }
}
