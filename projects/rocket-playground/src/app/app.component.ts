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
   public selectOptions = [{
      body: 'Option One',
      value: 'one'
   }, {
      body: 'Option Two',
      value: 'two'
   }, {
      body: 'Option Three',
      value: 'three'
   }];
   public selectValue: string;
   public textValue: string;
   public textAreaValue: string;

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
      console.log(this.textValue, this.textAreaValue, this.selectValue);
   }
}
