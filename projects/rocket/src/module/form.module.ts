/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RocketFormElementComponent } from '../component/form/element/form-element.component';
import { RocketFormInputComponent } from '../component/form/input/form-input.component';
import { RocketFormTextAreaComponent } from '../component/form/text-area/form-text-area.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule
   ],
   declarations: [
      RocketFormElementComponent,
      RocketFormInputComponent,
      RocketFormTextAreaComponent
   ],
   exports: [
      RocketFormElementComponent,
      RocketFormInputComponent,
      RocketFormTextAreaComponent
   ]
})
export class RocketFormModule {}
