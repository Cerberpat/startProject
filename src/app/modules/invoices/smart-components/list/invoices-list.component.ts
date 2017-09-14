import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {InvoicesViewModel} from '../../store/model/view/invoices-view.model';
import {InvoicesActions} from '../../store/actions/invoices.actions';
import {IApplicationState, invoicesList} from "../../../../comon/aplication-state";

@Component({
    selector: 'invoices-list',
    templateUrl: './invoices-list.html',
    encapsulation: ViewEncapsulation.None,
})

export class InvoicesListComponent implements OnInit {

    public invoicesList$: Observable<InvoicesViewModel[]>;

    constructor(private store: Store<IApplicationState>,
                private actions: InvoicesActions,
                private router: Router,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.invoicesList$ = this.store.select(invoicesList);
        this.store.dispatch(this.actions.loadList());
    }
}
