import { ActionReducerMap } from '@ngrx/store';
import {StoreModel} from '../models/StoreModel';
import menu from './menu';

export const reducers: ActionReducerMap<StoreModel> = {
  menu: menu
};
