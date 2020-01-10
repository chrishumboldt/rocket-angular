/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   ButtonShape,
   ButtonStyle,
   FormStyle,
   RocketButtonModule,
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
      RocketButtonModule,
      RocketConfigModule.forRoot({
         buttonShape: ButtonShape.PILL,
         buttonStyle: ButtonStyle.FLAT,
         formStyle: FormStyle.LINE
      }),
      RocketLayoutModule,
      RocketFormModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
