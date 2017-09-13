import {ViewEncapsulation, Component} from '@angular/core';

@Component({
    template: '<router-outlet></router-outlet>',
    selector: 'invoices-main',
    encapsulation: ViewEncapsulation.None
})

export class InvoicesMainComponent {
}
