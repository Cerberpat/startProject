import {ViewEncapsulation, Component} from '@angular/core';

@Component({
    template: '<router-outlet></router-outlet>',
    selector: 'products-main',
    encapsulation: ViewEncapsulation.None
})

export class ProductsMainComponent {
}
