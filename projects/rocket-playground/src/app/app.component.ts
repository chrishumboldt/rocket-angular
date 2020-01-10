/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';

import { RocketPaneService, State } from '../../../rocket/src/public-api';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
   public state = State.ACTIVE;

   constructor(
      private rocketPane: RocketPaneService
   ) {}

   public handleClick(): void {
      console.log('Button Clicked!');
      this.state = State.LOADING;
   }
}
