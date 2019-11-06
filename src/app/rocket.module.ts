/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import {
   RocketConfigModule,
   RocketLoaderModule,
   RocketPaneModule,
   RocketSizeModule
} from '@chrishumboldt/rocket';

@NgModule({
   imports: [
      RocketConfigModule.forRoot({
         storageName: 'coolio'
      }),
      RocketLoaderModule,
      RocketPaneModule,
      RocketSizeModule
   ],
   exports: [
      RocketConfigModule,
      RocketLoaderModule,
      RocketPaneModule,
      RocketSizeModule
   ]
})
export class RocketModule {}
