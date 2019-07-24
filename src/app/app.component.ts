/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import {
   LoaderType,
   RocketConfigService,
   RocketSetup
} from '@rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   ngOnInit() {
      RocketSetup();
      this.rocketConfig.setLoaderType(LoaderType.PULSE);
   }
}
