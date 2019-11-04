/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';

import { Size } from '../../store';

@Injectable({
   providedIn: 'root'
})
export class RocketResponsiceService {
   /**
    * Determine a size is based on a passed in numerical value. A size is an internal
    * value thats get projected out.
    *
    * @param dimension - The numerical dimension.
    */
   public getSize(dimension: number): Size {}
}
