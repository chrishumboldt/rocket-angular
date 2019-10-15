/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import {
   RocketDataHelper,
   RocketDataService,
   RocketLog,
   RocketSetup
} from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent extends RocketDataHelper implements OnInit {
   constructor(
      public rocketData: RocketDataService
   ) {
      super(rocketData);
   }

   ngOnInit() {
      RocketSetup();

      /**
       * Create the observable data.
       */
      this.createData({
         name: 'starWarsStuff',
         sortBy: 'name',
         data: [
            {name: 'Luke SkyWalker', value: 0},
            {name: 'Emperor Palpatine', value: 1},
            {name: 'Darth Vader', value: 2},
            {name: 'Leia Organa', value: 3}
         ]
      });
      this.createData({
         name: 'starWarsStuff2',
         data: 'Jedi'
      });

      /**
       * Subscribe to both data sets.
       */
      this.subscribeToData({
         observables: ['starWarsStuff', 'starWarsStuff2'],
         onEmit: (response: any) => RocketLog(response)
      });

      /**
       * Update data over time.
       */
      setTimeout(() => {
         this.updateData({
            name: 'starWarsStuff2',
            data: 'Stormtroopers'
         });
      }, 4000);

      setTimeout(() => {
         this.updateData({
            name: 'starWarsStuff2',
            data: 'sith'
         });
      }, 8000);
   }
}
