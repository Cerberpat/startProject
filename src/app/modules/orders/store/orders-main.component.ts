import {ViewEncapsulation, Component} from '@angular/core';

@Component({
    template: '<router-outlet></router-outlet>',
    selector: 'orders-main',
    encapsulation: ViewEncapsulation.None
})

export class OrdersMainComponent {
}
