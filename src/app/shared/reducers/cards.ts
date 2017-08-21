import {CardModel} from '../models/CardModel';
import * as cardsActions from '../actions/cards';

export const initialState: CardModel[] = [{
  id: 'a',
  title: 'a',
  list_id: 'a'
}, {
  id: 'b',
  title: 'b',
  list_id: 'b'
}];

export default function reducer(state = initialState, action: any): CardModel[] {
  switch (action.type) {
    case cardsActions.ADD_CARD:
      return  [ ...state, action.payload ];
    default: {
      return state;
    }
  }
}
