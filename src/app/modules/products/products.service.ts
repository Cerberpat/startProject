import {Injectable} from '@angular/core';
import {RequestHandlerService} from "../../comon/request-handler.service";
import {ProductsPayloadModel} from "./store/model/products-payload.model";

@Injectable()
export class ProductsService {
    private URL: string = 'http://labx.com.pl/api.php/';
    private URN_LIST: string = 'produkty';

    constructor(private requestHandler: RequestHandlerService) {}

    public list() {
        return this.requestHandler.getEffects(this.URN_LIST, null, this.URL).map(res => res.json());
    }
    
    public item(id: number) {
        return this.requestHandler.getEffects(this.URN_LIST+"/"+id, null, this.URL).map(res => res.json());
    }

    public save(product: ProductsPayloadModel) {
        if(product.id === 0) {
            return this.requestHandler.postEffects(this.URN_LIST, product, this.URL);
        } else {
            return this.requestHandler.putEffects(this.URN_LIST, product, this.URL);
        }
    }
}
