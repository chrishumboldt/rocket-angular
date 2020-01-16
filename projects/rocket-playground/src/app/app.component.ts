/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import { RocketLaunchService, State } from '../../../rocket/src/public-api';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   public state = State.ACTIVE;

   constructor(
      private rocketLaunch: RocketLaunchService
   ) {}

   ngOnInit() {
      this.rocketLaunch.ignition();
   }

   public handleClick(): void {
      console.log('Button Clicked!');
      this.state = State.LOADING;
   }
}
