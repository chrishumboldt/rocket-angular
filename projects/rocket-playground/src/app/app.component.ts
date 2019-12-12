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
   public paneName = 'testPane';
   public textValue = 'Look At Me!'

   constructor(
      private rocketPane: RocketPaneService
   ) {}

   public paneClose(): void {
      this.rocketPane.deactivate(this.paneName);
   }

   public paneOpen(): void {
      this.rocketPane.activate(this.paneName);
   }

   public testData(): void {
      console.log(this.textValue);
   }
}
