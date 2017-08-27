import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  public getMenu() {
    return this.http.get('http://localhost:3001/api/lists').map(res => res.json());
  }
}
