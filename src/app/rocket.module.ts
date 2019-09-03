/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketLoaderModule } from '@chrishumboldt/rocket';

@NgModule({
   imports: [
      RocketLoaderModule
   ],
   exports: [
      RocketLoaderModule
   ]
})
export class RocketModule {}
