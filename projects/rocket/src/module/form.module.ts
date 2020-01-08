/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketFormElementComponent } from '../component/form/element/form-element.component';
import { RocketFormInputComponent } from '../component/form/input/form-input.component';
import { RocketFormSelectComponent } from '../component/form/select/form-select.component';
import { RocketFormSlideLabelComponent } from '../component/form/slide-label/form-slide-label.component';
import { RocketFormTextAreaComponent } from '../component/form/text-area/form-text-area.component';
import { RocketCoreModule } from './core.module';

@NgModule({
   imports: [
      CommonModule,
      RocketCoreModule
   ],
   declarations: [
      RocketFormElementComponent,
      RocketFormInputComponent,
      RocketFormSelectComponent,
      RocketFormSlideLabelComponent,
      RocketFormTextAreaComponent
   ],
   exports: [
      RocketFormElementComponent,
      RocketFormInputComponent,
      RocketFormSelectComponent,
      RocketFormTextAreaComponent
   ]
})
export class RocketFormModule {}
