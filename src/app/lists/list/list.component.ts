import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from '../../shared/models/ListModel';
import {CardModel} from '../../shared/models/CardModel';
import {Store} from '@ngrx/store';
import {StoreModel} from '../../shared/models/StoreModel';
import {CardsAction} from '../../shared/actions/cards';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public list: ListModel;
  @Input() public cards: CardModel[];

  constructor(private store: Store<StoreModel>) { }

  ngOnInit() {
  }

  public onClickEditCard(card: CardModel) {
    console.log(card.id);
  }

  public addCard(listId: string) {
    const newCard: CardModel = <CardModel> {
      id: 'string',
      list_id: listId,
      title: 'asdasda'
    };
    this.store.dispatch(new CardsAction(newCard));
  }
}
