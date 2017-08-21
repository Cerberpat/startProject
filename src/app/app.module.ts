import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import {HttpModule} from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './shared/reducers/index';
import { ListComponent } from './lists/list/list.component';
import { CardComponent } from './lists/list/card/card.component';

const appRoutes: Routes = [{
  path: '',
  component: ListsComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    //2/ Setup store for given reducers
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
