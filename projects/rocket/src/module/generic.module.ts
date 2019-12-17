/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RocketArrowComponent } from '../component/generic/arrow/arrow.component';
import { RocketLineRevealComponent } from '../component/generic/line-reveal/line-reveal.component';

@NgModule({
   imports: [
      BrowserAnimationsModule
   ],
   declarations: [
      RocketArrowComponent,
      RocketLineRevealComponent
   ],
   exports: [
      RocketArrowComponent,
      RocketLineRevealComponent
   ]
})
export class RocketGenericModule {}
