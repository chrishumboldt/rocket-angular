/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketResizingDirective } from './resizing.directive';

@NgModule({
   declarations: [RocketResizingDirective],
   exports: [RocketResizingDirective]
})
export class RocketSizeModule {}
