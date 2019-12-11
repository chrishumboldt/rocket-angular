/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public textValue = 'Look At Me!'

   constructor() {}

   public testData() {
      console.log(this.textValue);
   }
}
