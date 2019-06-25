/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import { RocketLoaderComponent, RocketLog } from 'rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor() {}

   ngOnInit() {
      RocketLog(RocketLoaderComponent);
   }
}
