import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as cardsActions from '../actions/cards';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {CardModel} from '../models/CardModel';
import {ListsService} from '../../lists/lists.service';
import {ListModel} from '../models/ListModel';

@Injectable()
export class CardsEffects {

  @Effect()
  getCadrs$ = this.actions$
    .ofType(cardsActions.GET_CARDS_INIT)
    .map(toPayload)
    .switchMap(() => this.listsService.getCards()
      .map((payload: CardModel[]) => new cardsActions.GetCardsSuccessAction(payload))
      .catch((error: any) => of(new cardsActions.GetCardsFailureAction(error)))
    );

  @Effect()
  getLists$ = this.actions$
    .ofType(cardsActions.GET_LISTS_INIT)
    .map(toPayload)
    .switchMap(() => this.listsService.getLists()
      .map((payload: ListModel[]) => new cardsActions.GetListsSuccessAction(payload))
      .catch((error: any) => of(new cardsActions.GetListsFailureAction(error)))
    );

  constructor(private actions$: Actions, private listsService: ListsService) {}
}
