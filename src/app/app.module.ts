import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdministrationEffects} from "./modules/administration/store/effects/administration.effects";
import {InvoicesEffects} from "./modules/invoices/store/effects/invoices.effects";
import {ProductsEffects} from "./modules/products/store/effects/products.effects";
import {OrdersEffects} from "./modules/orders/store/effects/orders.effects";
import {administrationListReducer} from "./modules/administration/store/reducers/administration-list.reducer";
import {invoicesListReducer} from "./modules/invoices/store/reducers/invoices-list.reducer";
import {ordersListReducer} from "./modules/orders/store/reducers/orders-list.reducer";
import {productsListReducer} from "./modules/products/store/reducers/products-list.reducer";
import {ProductsModule} from "./modules/products/store/products.module";
import {OrdersModule} from "./modules/orders/store/orders.module";
import {InvoicesModule} from "./modules/invoices/store/invoices.module";
import {AdministrationModule} from "./modules/administration/store/administration.module";
import {HeadComponent} from "./components/head/head.component";
import {MainComponent} from "./components/main/main.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

const appRoutes: Routes = [{
    path: '',
    component: MainComponent
}];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HeadComponent,
        MainComponent
    ],
    imports: [
        AdministrationModule,
        InvoicesModule,
        OrdersModule,
        ProductsModule,
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        ),
        StoreModule.forRoot([
            administrationListReducer,
            invoicesListReducer,
            ordersListReducer,
            productsListReducer
        ]),
        EffectsModule.forRoot([
            AdministrationEffects,
            InvoicesEffects,
            OrdersEffects,
            ProductsEffects
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
