import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from '../../shared/models/ListModel';
import {CardModel} from '../../shared/models/CardModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public list: ListModel;
  @Input() public cards: CardModel[];

  constructor() { }

  ngOnInit() {
  }

  public onClickEditCard(card: CardModel) {
    console.log(card.id);
  }
}
