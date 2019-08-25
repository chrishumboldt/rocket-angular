/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import { LoaderType, RocketConfigService, RocketDOM } from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   constructor(
      private configService: RocketConfigService
   ) {}

   ngOnInit() {
      RocketDOM.setup();
      this.configService.setLoaderType(LoaderType.DOTS);
   }
}
