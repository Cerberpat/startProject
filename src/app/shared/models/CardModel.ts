export interface CardModel {
  id: string;
  list_id: string;
  title: string;
  user?: string; // owner of the card
}
