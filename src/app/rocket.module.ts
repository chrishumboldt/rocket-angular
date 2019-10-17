/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketConfigModule, RocketLoaderModule } from '@chrishumboldt/rocket';

@NgModule({
   imports: [
      RocketConfigModule,
      RocketLoaderModule
   ],
   exports: [
      RocketConfigModule,
      RocketLoaderModule
   ]
})
export class RocketModule {}
