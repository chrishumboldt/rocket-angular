/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketLoaderModule } from './loader.module';
import { RocketButtonComponent } from '../component/button/button.component';

@NgModule({
   imports: [
      CommonModule,
      RocketLoaderModule
   ],
   declarations: [
      RocketButtonComponent
   ],
   exports: [
      RocketButtonComponent
   ]
})
export class RocketButtonModule {}
