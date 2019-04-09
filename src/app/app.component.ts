/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import { Rocket } from 'rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   private tester = 'my-file.xls';

   ngOnInit() {
      Rocket.log(Rocket.is.colour(this.tester));
   }
}
