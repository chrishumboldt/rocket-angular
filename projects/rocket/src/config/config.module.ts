/**
 * @author Chris Humboldt
 */

import { ModuleWithProviders, NgModule} from '@angular/core';

import { RocketConfig } from './config.class';

@NgModule()
export class RocketConfigModule {
   static forRoot(config: RocketConfig): ModuleWithProviders {
      return {
         ngModule: RocketConfigModule,
         providers: [
            {
               provide: RocketConfig,
               useValue: config
            }
         ]
      };
   }
}
