/**
 * @author Chris Humboldt
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketPaneComponent } from './pane.component';

@NgModule({
   imports: [CommonModule],
   declarations: [RocketPaneComponent],
   exports: [RocketPaneComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RocketPaneModule {}
