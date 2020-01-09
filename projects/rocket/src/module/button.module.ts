/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketButtonComponent } from '../component/button/button.component';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      RocketButtonComponent
   ],
   exports: [
      RocketButtonComponent
   ]
})
export class RocketButtonModule {}
