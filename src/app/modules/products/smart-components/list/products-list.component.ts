import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductsViewModel} from '../../store/model/view/products-view.model';
import {ProductsActions} from '../../store/actions/products.actions';
import {IApplicationState} from "../../../../comon/aplication-state";

@Component({
    selector: 'products-list',
    templateUrl: './products-list.html',
    encapsulation: ViewEncapsulation.None,
})

export class ProductsListComponent implements OnInit {

    public productsList$: Observable<ProductsViewModel[]>;

    constructor(private store: Store<IApplicationState>,
                private actions: ProductsActions,
                private router: Router,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.productsList$ = this.store.select(state => state.productsListReducer);
        this.store.dispatch(this.actions.loadList());
    }
}
