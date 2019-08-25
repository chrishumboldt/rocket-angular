/**
 * @author Chris Humboldt
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketModule } from './rocket.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      RocketModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
