/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   ColourCode,
   FormStyle,
   RocketConfigModule,
   RocketFormModule,
   RocketLayoutModule,
   RocketLoaderModule,
   RocketPaneModule
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
      RocketLoaderModule,
      RocketFormModule,
      RocketPaneModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
