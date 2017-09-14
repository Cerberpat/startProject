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
import {ProductsModule} from "./modules/products/products.module";
import {OrdersModule} from "./modules/orders/store/orders.module";
import {InvoicesModule} from "./modules/invoices/store/invoices.module";
import {AdministrationModule} from "./modules/administration/store/administration.module";
import {HeadComponent} from "./components/head/head.component";
import {MainComponent} from "./components/main/main.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RequestHandlerService} from "./comon/request-handler.service";
import {reducers} from "./comon/aplication-state";

const appRoutes: Routes = [{
    path: '',
    component: MainComponent
}];

@NgModule({
    exports: [
    ],
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
        EffectsModule.forRoot([
            AdministrationEffects,
            InvoicesEffects,
            OrdersEffects,
            ProductsEffects
        ]),
        StoreModule.forRoot(reducers),
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    providers: [
        RequestHandlerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
