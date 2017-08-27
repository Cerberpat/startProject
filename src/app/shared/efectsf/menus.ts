import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as menusActions from '../actions/menus';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {MenuModel} from '../models/MenuModel';
import {MenuService} from '../../main/menu.service';

@Injectable()
export class MenusEffects {

  @Effect()
  getCadrs$ = this.actions$
    .ofType(menusActions.GET_MENU_INIT)
    .map(toPayload)
    .switchMap(() => this.menusService.getMenu()
      .map((payload: MenuModel[]) => new menusActions.GetMenuSuccessAction(payload))
      .catch((error: any) => of(new menusActions.GetMenuFailureAction(error)))
    );

  constructor(private actions$: Actions, private menusService: MenuService) {}
}
