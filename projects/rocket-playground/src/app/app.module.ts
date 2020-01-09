/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   ButtonShape,
   FormStyle,
   ButtonColour,
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
         buttonColour: ButtonColour.BLUE,
         buttonShape: ButtonShape.PILL,
         formStyle: FormStyle.LINE
      }),
      RocketLayoutModule,
      RocketFormModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
