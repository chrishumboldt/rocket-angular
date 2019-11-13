/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketPaneComponent } from './pane.component';

@NgModule({
   imports: [CommonModule],
   declarations: [RocketPaneComponent],
   exports: [RocketPaneComponent]
})
export class RocketPaneModule {}
