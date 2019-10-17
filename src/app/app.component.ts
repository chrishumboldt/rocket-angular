/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import { RocketDataHelper, RocketDataService } from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent extends RocketDataHelper implements OnInit {
   constructor(
      public rocketData: RocketDataService
   ) {
      super(rocketData);
   }

   ngOnInit() {}
}
