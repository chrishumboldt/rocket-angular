/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RocketLineRevealComponent } from '../component/generic/line-reveal/line-reveal.component';

@NgModule({
   imports: [
      BrowserAnimationsModule
   ],
   declarations: [
      RocketLineRevealComponent
   ],
   exports: [
      RocketLineRevealComponent
   ]
})
export class RocketGenericModule {}
