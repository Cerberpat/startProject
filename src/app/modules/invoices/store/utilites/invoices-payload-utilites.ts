import {InvoicesPayloadModel} from '../model/payload/invoices-payload.model';
import {InvoicesViewModel} from '../model/view/invoices-view.model';

export function invoicessPayloadToViewModel(payloads: InvoicesPayloadModel[]): InvoicesViewModel[] {
    return payloads.map(invoicesPayloadToViewModel);
}

export function invoicesPayloadToViewModel(payload: InvoicesPayloadModel): InvoicesViewModel {
    const model = payload as InvoicesPayloadModel;
    return model;
}
