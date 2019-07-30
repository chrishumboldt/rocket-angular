/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import {
   LoaderType,
   RocketConfigService,
   RocketDOM
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
      RocketDOM.setup();
      this.rocketConfig.setLoaderType(LoaderType.PULSE);
   }
}
