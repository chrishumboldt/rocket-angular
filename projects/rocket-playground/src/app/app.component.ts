/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';

import { RocketPaneService } from '../../../rocket/src/public-api';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
   constructor(
      private rocketPane: RocketPaneService
   ) {}

   public handleClick(): void {
      console.log('Button Clicked!');
   }
}
