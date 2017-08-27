import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StoreModel} from "../shared/models/StoreModel";
import { Store } from '@ngrx/store';
import {MenuModel} from "../shared/models/MenuModel";
import {GetMenuInitAction} from "../shared/actions/menus";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // products are now stream of products
  public cards$: Observable<MenuModel[]>;

  constructor(private store: Store<StoreModel>) { }

  ngOnInit() {
    this.store.dispatch(new GetMenuInitAction());
    this.cards$ = this.store.select(state => state.menu);
  }

  public getCardForListId(cards: MenuModel[], listId: string) {
    return cards.filter((e) => e.menu_id === listId);
  }
}
