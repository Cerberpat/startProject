import { Action } from '@ngrx/store';
import {MenuModel} from '../models/MenuModel';

export const ADD_MENU = 'ADD_MENU';
export const GET_MENU_INIT = 'GET_MENU_INIT';
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';
export const GET_MENU_FAILURE = 'GET_MENU_FAILURE';

export class AddMenuAction implements Action {
  readonly type = ADD_MENU;
  constructor(public payload: MenuModel) { }
}

export class GetMenuInitAction implements Action {
  readonly type = GET_MENU_INIT;
  constructor() { }
}

export class GetMenuSuccessAction implements Action {
  readonly type = GET_MENU_SUCCESS;
  constructor(public payload: MenuModel[]) { }
}

export class GetMenuFailureAction implements Action {
  readonly type = GET_MENU_FAILURE;
  constructor(public payload: any) { }
}

export type Actions = AddMenuAction
  | GetMenuInitAction
  | GetMenuSuccessAction
  | GetMenuFailureAction;

