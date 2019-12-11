/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   RocketConfigModule,
   RocketLoaderModule,
   RocketFormModule
} from '../../../rocket/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      RocketConfigModule.forRoot(),
      RocketLoaderModule,
      RocketFormModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
