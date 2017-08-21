import { ActionReducerMap } from '@ngrx/store';
import {StoreModel} from '../models/StoreModel';
import lists from './lists';
import cards from './cards';

export const reducers: ActionReducerMap<StoreModel> = {
  lists: lists,
  cards: cards
};
