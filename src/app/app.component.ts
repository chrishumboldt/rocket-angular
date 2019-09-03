/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import { RocketSetup } from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   constructor() {}

   ngOnInit() {
      RocketSetup();
   }
}
