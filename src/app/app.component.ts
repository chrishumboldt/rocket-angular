/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';

import { RocketStorageService } from 'rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(
      private rocketStorage: RocketStorageService
   ) {}

   ngOnInit() {
      this.rocketStorage.add('Something', 'Cool');
      this.rocketStorage.add('Coolio', 'Poolio');

      setTimeout(() => {
         this.rocketStorage.clear('Coolio');
      }, 2000);

      setTimeout(() => {
         this.rocketStorage.clear('Something');
      }, 4000);
   }
}
