/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   FormStyle,
   RocketConfigModule,
   RocketFormModule,
   RocketLayoutModule
} from '../../../rocket/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      RocketConfigModule.forRoot({formStyle: FormStyle.LINE}),
      RocketLayoutModule,
      RocketFormModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
