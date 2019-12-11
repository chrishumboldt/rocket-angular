/**
 * @author Chris Humboldt
 */

import { Injectable, HostListener } from '@angular/core';

import { DataName } from '../../store/data.store';
import { RocketDataService } from '../data/data.service';
import { RocketIs } from '../../tool/is/is.tool';

@Injectable({
   providedIn: 'root'
})
export class RocketUIService {
   private isBrowser = RocketIs.browser();

   constructor(
      private rocketData: RocketDataService
   ) {}

   /**
    * Start the global click listner that captures every click event that happens
    * on the DOM. Each event is then pushed to an observable data stream that can
    * be subscribe to.
    */
   @HostListener('document:click', ['$event'])
   documentClicked(event: PointerEvent) {
      if (this.isBrowser) {
         this.rocketData.update({name: DataName.DOCUMENT_CLICK, data: event});
      }
   }
}
