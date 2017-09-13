import {ProductsPayloadModel} from '../model/payload/products-payload.model';
import {ProductsViewModel} from '../model/view/products-view.model';

export function productssPayloadToViewModel(payloads: ProductsPayloadModel[]): ProductsViewModel[] {
    return payloads.map(productsPayloadToViewModel);
}

export function productsPayloadToViewModel(payload: ProductsPayloadModel): ProductsViewModel {
    const model = payload as ProductsPayloadModel;
    return model;
}
