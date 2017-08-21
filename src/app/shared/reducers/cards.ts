import {CardModel} from '../models/CardModel';

export const initialState: CardModel[] = [{
  id: 'a',
  title: 'a',
  list_id: 'string'
}, {
  id: 'b',
  title: 'b',
  list_id: 'string'
}];

export default function reducer(state = initialState, action: any): CardModel[] {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
