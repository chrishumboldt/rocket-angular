/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import {
   RocketConfigModule,
   RocketLoaderModule,
   RocketResponsiveModule,
   RocketPaneModule
} from '@chrishumboldt/rocket';

@NgModule({
   imports: [
      RocketConfigModule.forRoot({
         storageName: 'coolio'
      }),
      RocketLoaderModule,
      RocketResponsiveModule,
      RocketPaneModule
   ],
   exports: [
      RocketConfigModule,
      RocketLoaderModule,
      RocketResponsiveModule,
      RocketPaneModule
   ]
})
export class RocketModule {}
