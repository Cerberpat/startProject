import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AdministrationViewModel} from '../../store/model/view/administration-view.model';
import {AdministrationActions} from '../../store/actions/administration.actions';
import {IApplicationState} from "../../../../comon/aplication-state";

@Component({
    selector: 'administration-list',
    templateUrl: './administration-list.html',
    encapsulation: ViewEncapsulation.None,
})

export class AdministrationListComponent implements OnInit {

    public administrationList$: Observable<AdministrationViewModel[]>;

    constructor(private store: Store<IApplicationState>,
                private actions: AdministrationActions,
                private router: Router,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.administrationList$ = this.store.select(state => state.administrationListReducer);
        this.store.dispatch(this.actions.loadList());
    }
}
