/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import {
   RocketConfigModule,
   RocketLoaderModule,
   RocketPaneModule
} from '@chrishumboldt/rocket';

@NgModule({
   imports: [
      RocketConfigModule.forRoot({
         storageName: 'coolio'
      }),
      RocketLoaderModule,
      RocketPaneModule
   ],
   exports: [
      RocketConfigModule,
      RocketLoaderModule,
      RocketPaneModule
   ]
})
export class RocketModule {}
