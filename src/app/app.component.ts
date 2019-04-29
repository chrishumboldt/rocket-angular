/**
 * @author Chris Humboldt
 */

import { Component, OnInit } from '@angular/core';
import { RocketLog, RocketDOM } from 'rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   ngOnInit() {
      RocketLog(RocketDOM.element('#somethingOne'));
   }
}
