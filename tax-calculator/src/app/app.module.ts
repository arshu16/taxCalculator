import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { reducers, metaReducers } from './reducers';
import { MaterialModule } from './modules/material.module';
import { CustomRouterStateSerializer } from './shared/utils';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TaxComponent } from './tax/tax.component';

@NgModule({
  declarations: [AppComponent, TaxComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Tax Calculator DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
