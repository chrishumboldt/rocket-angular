/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';

import { RocketConfigService } from '../config/config.service';
import { Prefix, SizeText } from '../../store';
import { RocketIs } from '../../tool';

import { Size, SizeClasses } from './size.class';

@Injectable({
   providedIn: 'root'
})
export class RocketSizeService {
   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   /**
    * Determine a size based on a passed in numerical value. A size is an internal
    * value thats get projected out.
    *
    * @param input - The size input. Is either a height or a width.
    */
   private getSizeText(input: number): SizeText {
      /**
       * Catch.
       */
      if (!RocketIs.number(input)) {
         return;
      }

      /**
       * Check the size bands to determine the size.
       */
      const sizeSmallLimit = this.rocketConfig.sizeSmall;
      const sizeMediumLimit = this.rocketConfig.sizeMedium;

      if (input <= sizeSmallLimit) {
         return SizeText.SMALL;
      } else if (input > sizeSmallLimit && input <= sizeMediumLimit) {
         return SizeText.MEDIUM;
      } else {
         return SizeText.LARGE;
      }
   }

   /**
    * Based on a size return what size classes can be applied.
    *
    * @param size - The size.
    */
   public getSizeClasses(size: Size): SizeClasses {
      return new SizeClasses({
         height: `${Prefix.SIZE}h-${this.getSizeText(size.height)}`,
         width: `${Prefix.SIZE}w-${this.getSizeText(size.width)}`
      });
   }
}
