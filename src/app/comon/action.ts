import {Action} from "@ngrx/store";

export interface IAction extends Action {
    payload: any
}

// type: any,
/*
export class BuyProductAction implements Action {
    readonly type = BUY_PRODUCT;
    constructor(public payload: number | string) { }
}
}*/
