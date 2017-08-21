import {ListModel} from './ListModel';
import {CardModel} from './CardModel';

export interface StoreModel {
  lists: ListModel[];
  cards: CardModel[];
}
