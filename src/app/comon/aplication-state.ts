import {ProductsPayloadModel} from "../modules/products/store/model/payload/products-payload.model";
import {OrdersPayloadModel} from "../modules/orders/store/model/payload/orders-payload.model";
import {InvoicesPayloadModel} from "../modules/invoices/store/model/payload/invoices-payload.model";
import {AdministrationPayloadModel} from "../modules/administration/store/model/payload/administration-payload.model";

export interface IApplicationState {
    administrationListReducer: AdministrationPayloadModel[];
    invoicesListReducer: InvoicesPayloadModel[];
    ordersListReducer: OrdersPayloadModel[];
    productsListReducer: ProductsPayloadModel[];
}
