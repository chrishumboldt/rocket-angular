/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketPaneComponent } from '../component/pane/pane.component';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      RocketPaneComponent
   ],
   exports: [
      RocketPaneComponent
   ]
})
export class RocketPaneModule {}
