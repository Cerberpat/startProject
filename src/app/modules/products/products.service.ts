import {Injectable} from '@angular/core';
import {RequestHandlerService} from "../../comon/request-handler.service";

@Injectable()
export class ProductsService {
    private URL: string = 'http://labx.com.pl/api.php/';
    private URN_LIST: string = 'produkty';

    constructor(private requestHandler: RequestHandlerService) {}

    public list() {
        console.log(this.URL+this.URN_LIST);
        return this.requestHandler.getEffects(this.URL+this.URN_LIST).map(res => res.json());
        //return this.requestHandler.getEffects(this.LIST_URN, this.URL);
    }
}
