/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';
import {
   RocketDataService,
   RocketHelper,
   RocketPaneService
} from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent extends RocketHelper {
   public paneName = 'tester';
   public result: string;

   constructor(
      public rocketData: RocketDataService,
      private rocketPane: RocketPaneService
   ) {
      super(rocketData);
   }

   public closePane(): void {
      this.rocketPane.deactivate(this.paneName);
   }

   public openPane(): void {
      this.rocketPane.activate(this.paneName);
   }
}
