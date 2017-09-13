import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {OrdersViewModel} from '../../store/model/view/orders-view.model';
import {OrdersActions} from '../../store/actions/orders.actions';
import {IApplicationState} from "../../../../comon/aplication-state";

@Component({
    selector: 'orders-list',
    templateUrl: './orders-list.html',
    encapsulation: ViewEncapsulation.None,
})

export class OrdersListComponent implements OnInit {

    public ordersList$: Observable<OrdersViewModel[]>;

    constructor(private store: Store<IApplicationState>,
                private actions: OrdersActions,
                private router: Router,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.ordersList$ = this.store.select(state => state.ordersListReducer);
        this.store.dispatch(this.actions.loadList());
    }
}
