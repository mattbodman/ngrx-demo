import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {dwellingsReducer} from './features/dwellings/store/dwellings.reducer';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {DwellingsEffects} from './features/dwellings/store/dwellings.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({router: routerReducer, dwellings: dwellingsReducer}), // register the Store for the application
    EffectsModule.forRoot([DwellingsEffects]), // register Effects
    StoreRouterConnectingModule.forRoot(),  // optional, add the router store
    StoreDevtoolsModule.instrument({name: 'NGRX Demo'})  // add and configure the Devtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
