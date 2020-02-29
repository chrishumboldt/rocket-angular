/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RocketArrowComponent } from '../component/arrow/arrow.component';
import { RocketLineRevealComponent } from '../component/line-reveal/line-reveal.component';

@NgModule({
  imports: [BrowserAnimationsModule],
  declarations: [RocketArrowComponent, RocketLineRevealComponent],
  exports: [RocketArrowComponent, RocketLineRevealComponent]
})
export class RocketCoreModule {}
