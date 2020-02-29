/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RocketPaneComponent } from '../component/pane/pane.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [RocketPaneComponent],
  exports: [RocketPaneComponent]
})
export class RocketPaneModule {}
