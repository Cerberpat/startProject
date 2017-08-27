import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './main/menu.component';
import {HttpModule} from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './shared/reducers/index';
import {MenusEffects} from './shared/efectsf/menus';
import {MenuService} from './main/menu.service';
import {EffectsModule} from '@ngrx/effects';

const appRoutes: Routes = [{
  path: '',
  component: MenuComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    //2/ Setup store for given reducers
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MenusEffects])
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
