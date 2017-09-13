import {OrdersPayloadModel} from '../model/payload/orders-payload.model';
import {OrdersViewModel} from '../model/view/orders-view.model';

export function orderssPayloadToViewModel(payloads: OrdersPayloadModel[]): OrdersViewModel[] {
    return payloads.map(ordersPayloadToViewModel);
}

export function ordersPayloadToViewModel(payload: OrdersPayloadModel): OrdersViewModel {
    const model = payload as OrdersPayloadModel;
    return model;
}
