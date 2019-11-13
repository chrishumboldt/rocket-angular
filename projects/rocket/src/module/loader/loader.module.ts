/**
 * @author Chris Humboldt
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketLoaderComponent } from './loader.component';

@NgModule({
   imports: [CommonModule],
   declarations: [RocketLoaderComponent],
   exports: [RocketLoaderComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RocketLoaderModule {}
