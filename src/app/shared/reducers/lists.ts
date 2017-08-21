import {ListModel} from "../models/ListModel";

export const initialState: ListModel[] = [{
  id: 'a',
  title: 'a'
}, {
  id: 'b',
  title: 'b'
}];

export default function reducer(state = initialState, action: any): ListModel[] {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
