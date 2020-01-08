/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';

import { FormSelectOption, RocketPaneService } from '../../../rocket/src/public-api';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
   public paneName = 'testPane';
   public selectOptions = [
      new FormSelectOption({body: 'Option One', value: 'one'}),
      new FormSelectOption({body: 'Option Two', value: 'two'}),
      new FormSelectOption({body: 'Option Three'}),
      new FormSelectOption({body: 'Option Four'}),
      new FormSelectOption({body: 'Option Five'}),
      new FormSelectOption({body: 'Option Six'}),
      new FormSelectOption({body: 'Option Seven'})
   ];
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
