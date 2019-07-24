/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketLoaderComponent } from '../component/loader.component';

@NgModule({
   imports: [CommonModule],
   declarations: [RocketLoaderComponent],
   exports: [RocketLoaderComponent]
})
export class RocketLoaderModule {}
