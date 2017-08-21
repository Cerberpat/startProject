import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../../shared/models/CardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public card: CardModel;

  constructor() { }

  ngOnInit() {
  }

}
