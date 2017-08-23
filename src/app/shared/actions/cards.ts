import { Action } from '@ngrx/store';
import {CardModel} from '../models/CardModel';
import {ListModel} from "../models/ListModel";

export const ADD_CARD = 'ADD CARD';
export const GET_CARDS_INIT = 'GET_CARDS_INIT';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE';
export const GET_LISTS_INIT = 'GET_LISTS_INIT';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILURE = 'GET_LISTS_FAILURE';

export class AddCardsAction implements Action {
  readonly type = ADD_CARD;
  constructor(public payload: CardModel) { }
}

export class GetCardsInitAction implements Action {
  readonly type = GET_CARDS_INIT;
  constructor() { }
}

export class GetCardsSuccessAction implements Action {
  readonly type = GET_CARDS_SUCCESS;
  constructor(public payload: CardModel[]) { }
}

export class GetCardsFailureAction implements Action {
  readonly type = GET_CARDS_FAILURE;
  constructor(public payload: any) { }
}

export class GetListsInitAction implements Action {
  readonly type = GET_LISTS_INIT;
  constructor() { }
}

export class GetListsSuccessAction implements Action {
  readonly type = GET_LISTS_SUCCESS;
  constructor(public payload: ListModel[]) { }
}

export class GetListsFailureAction implements Action {
  readonly type = GET_LISTS_FAILURE;
  constructor(public payload: any) { }
}

export type Actions = AddCardsAction
  | GetCardsInitAction
  | GetCardsSuccessAction
  | GetCardsFailureAction
  | GetListsInitAction
  | GetListsSuccessAction
  | GetListsFailureAction;

