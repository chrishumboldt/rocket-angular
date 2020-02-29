/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
   ButtonShape,
   ButtonRender,
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
         buttonRender: ButtonRender.FLAT,
         formStyle: FormStyle.LINE
      }),
      RocketLayoutModule,
      RocketFormModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
