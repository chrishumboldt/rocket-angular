/**
 * @author Chris Humboldt
 */

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { RocketDataService, RocketHelper, RocketLog } from '@chrishumboldt/rocket';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent extends RocketHelper implements OnInit {
   public paneName = 'tester';
   public result: string;

   constructor(
      public elm: ElementRef,
      public rocketData: RocketDataService
   ) {
      super(rocketData, elm);
   }

   @HostBinding('style.display') displayStyle = 'block';

   ngOnInit() {
      this.initResizingListener();

      this.subscribeToResizing((size: any) => {
         RocketLog(size);
      });
   }
}
