import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ListModel} from "../shared/models/ListModel";
import {StoreModel} from "../shared/models/StoreModel";
import { Store } from '@ngrx/store';
import {CardModel} from "../shared/models/CardModel";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  // products are now stream of products
  public lists$: Observable<ListModel[]>;
  public cards$: Observable<CardModel[]>;

  constructor(private store: Store<StoreModel>) { }

  ngOnInit() {
    this.lists$ = this.store.select(state => state.lists);
    this.cards$ = this.store.select(state => state.cards);
  }

  public getCardForListId(cards: CardModel[], listId: string) {
    return cards.filter((e) => e.list_id === listId);
  }
}
