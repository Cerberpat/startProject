import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ListsService {

  constructor(private http: Http) { }

  public getLists() {
    return this.http.get('http://localhost:3001/api/lists').map(res => res.json());
  }

  public getCards() {
    return this.http.get('http://localhost:3001/api/cards').map(res => res.json());
  }
}
