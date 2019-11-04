/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';
import {
   RocketDataService,
   RocketHelper
} from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent extends RocketHelper {
   public paneName = 'tester';
   public result: string;

   constructor(
      public rocketData: RocketDataService
   ) {
      super(rocketData);
   }
}
