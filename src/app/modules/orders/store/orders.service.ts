import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class OrdersService {
    private URL: string = '';
    private LIST_URN = 'crud/orders/';

    constructor(private http: Http) {}

    public list() {
        return this.http.get(this.URL+this.LIST_URN).map(res => res.json());
        //return this.requestHandler.getEffects(this.LIST_URN, this.URL);
    }
}
