import {AdministrationPayloadModel} from '../model/payload/administration-payload.model';
import {AdministrationViewModel} from '../model/view/administration-view.model';

export function administrationsPayloadToViewModel(payloads: AdministrationPayloadModel[]): AdministrationViewModel[] {
    return payloads.map(administrationPayloadToViewModel);
}

export function administrationPayloadToViewModel(payload: AdministrationPayloadModel): AdministrationViewModel {
    const model = payload as AdministrationPayloadModel;
    return model;
}
