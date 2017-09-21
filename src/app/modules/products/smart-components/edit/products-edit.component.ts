import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductsActions} from '../../store/actions/products.actions';
import {IApplicationState, productsList} from "../../../../comon/aplication-state";
import {ProductsPayloadModel} from "../../store/model/products-payload.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Actions} from '@ngrx/effects';
import {IAction} from "../../../../comon/action";

@Component({
    selector: 'products-edit',
    templateUrl: './products-edit.html',
    encapsulation: ViewEncapsulation.None,
})

export class ProductsEditComponent implements OnInit {
    public productForm: FormGroup;
    private product: ProductsPayloadModel;
    private sended: boolean = false;
    private subscribers: any[] = [];

    constructor(private store: Store<IApplicationState>,
                private productsActions: ProductsActions,
                private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private actions$: Actions) { }

    public ngOnInit(): void {
        this.subscribers.push(this.route.params.subscribe((params) => {
            if(params && params.id) {
                this.loadProcuctToEdit(parseInt(params.id, 10));              
            } else {
                this.loadProcuctToAdd();
            }
        }));
    }

    private loadProcuctToAdd() {
        this.product = new ProductsPayloadModel();
        this.createForm();
    }

    private loadProcuctToEdit(id: number) {
        const loadItemSucces = this.actions$
            .ofType(ProductsActions.LOAD_ITEM_SUCCESS)
            .subscribe((action) => {
                this.product = (action as IAction).payload;
                this.createForm();
            });
        const loadItemFeilure = this.actions$
            .ofType(ProductsActions.LOAD_ITEM_FAILED)
            .subscribe((action) => {
                this.loadProcuctToAdd();
            });
        this.subscribers.push(loadItemSucces);
        this.subscribers.push(loadItemFeilure);
        this.store.dispatch(this.productsActions.loadItem(id));
    }
    
    public createForm() {
        this.productForm = this.formBuilder.group({
            kategoria: [this.product.kategoria, [Validators.required]],
            nazwa: [this.product.nazwa, [Validators.required]],
            magazyn: [this.product.magazyn, [Validators.required]],
            cena: [this.product.cena, [Validators.required]],
        });
    }

    public formSubmit(event) {
        this.sended = true;
        if(this.productForm.valid) {
            this.product.kategoria = this.productForm.controls.kategoria.value;
            this.product.nazwa = this.productForm.controls.nazwa.value;
            this.product.magazyn = this.productForm.controls.magazyn.value;
            this.product.cena = this.productForm.controls.cena.value;
            this.store.dispatch(this.productsActions.saveItem(this.product));
        }
    }
}








