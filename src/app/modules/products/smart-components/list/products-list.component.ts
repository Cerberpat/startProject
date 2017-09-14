import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductsActions} from '../../store/actions/products.actions';
import {IApplicationState, productsList} from "../../../../comon/aplication-state";
import {ProductsPayloadModel} from "../../store/model/products-payload.model";

@Component({
    selector: 'products-list',
    templateUrl: './products-list.html',
    encapsulation: ViewEncapsulation.None,
})

export class ProductsListComponent implements OnInit {
    public productsList$: Observable<ProductsPayloadModel[]>;

    constructor(private store: Store<IApplicationState>,
                private actions: ProductsActions,
                private router: Router,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.productsList$ = this.store.select(productsList);
        this.store.dispatch(this.actions.loadList());
    }

    public handleCheckedItem(event) {

    }

    public handleSelectItem(event) {

    }
}
