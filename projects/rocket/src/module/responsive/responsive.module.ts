/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketResponsiveDirective } from './responsive.directive';

@NgModule({
   declarations: [RocketResponsiveDirective],
   exports: [RocketResponsiveDirective]
})
export class RocketResponsiveModule {}
