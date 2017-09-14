import {ProductsPayloadModel} from "../modules/products/store/model/products-payload.model";
import {OrdersPayloadModel} from "../modules/orders/store/model/payload/orders-payload.model";
import {InvoicesPayloadModel} from "../modules/invoices/store/model/payload/invoices-payload.model";
import {AdministrationPayloadModel} from "../modules/administration/store/model/payload/administration-payload.model";
import {ActionReducerMap} from "@ngrx/store";
import {productsListReducer} from "../modules/products/store/reducers/products-list.reducer";
import {administrationListReducer} from "../modules/administration/store/reducers/administration-list.reducer";
import {ordersListReducer} from "../modules/orders/store/reducers/orders-list.reducer";
import {invoicesListReducer} from "../modules/invoices/store/reducers/invoices-list.reducer";

export interface IApplicationState {
    administrationListReducer: AdministrationPayloadModel[];
    invoicesListReducer: InvoicesPayloadModel[];
    ordersListReducer: OrdersPayloadModel[];
    productsListReducer: ProductsPayloadModel[];
}

export const productsList = (state: IApplicationState) => state.productsListReducer;
export const administrationList = (state: IApplicationState) => state.administrationListReducer;
export const invoicesList = (state: IApplicationState) => state.invoicesListReducer;
export const ordersList = (state: IApplicationState) => state.ordersListReducer;

export const reducers: ActionReducerMap<IApplicationState> = {
    administrationListReducer,
    invoicesListReducer,
    ordersListReducer,
    productsListReducer,
};
