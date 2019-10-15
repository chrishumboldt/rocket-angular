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
      this.createData({name: 'starWarsCaracters'});
      this.createData({
         name: 'starWarsStuff',
         data: 'Jedi'
      });

      /**
       * Subscribe to both data sets.
       */
      this.subscribeToData({
         observables: ['loggedIn', 'starWarsCaracters', 'starWarsStuff'],
         onEmit: (response: any) => RocketLog(response)
      });

      /**
       * Update data over time.
       */
       setTimeout(() => {
          this.updateData({
             name: 'starWarsCaracters',
             sortBy: 'name',
             data: [
                {name: 'Luke SkyWalker', value: 0},
                {name: 'Emperor Palpatine', value: 1},
                {name: 'Darth Vader', value: 2},
                {name: 'Leia Organa', value: 3}
             ]
          });
       }, 2000);

      setTimeout(() => {
         this.updateData({
            name: 'starWarsStuff',
            data: 'Stormtroopers'
         });
      }, 4000);

      setTimeout(() => {
         this.updateData({
            name: 'starWarsStuff',
            data: 'Sith'
         });
      }, 6000);
   }
}
