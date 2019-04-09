/**
 * @author Chris Humboldt
 */

import { rocketIs } from './is.tool';

/**
 * Clean and array of null values.
 *
 * @param {any} input
 */
function arrayClean(input: any, hardClean = false): any[] {
   if (!rocketIs.array(input)) {
      /**
       * If the input is not an array then assume that the array is empty.
       * This is an acceptable "soft" fail.
       */
      return [];
   } else {
      if (!hardClean) {
         /**
          * A soft clean filters out NULL entries. Undefined is considered an
          * acceptable entry in the array.
          */
         return input.filter((item: any) => item !== null);
      } else {
         /**
          * A hard clean only accepts populated values that are defined.
          */
         return input.filter((item: any) => {
            return (
               item !== null
               && item !== undefined
               && item.length > 0
            );
         });
      }
   }
}

/**
 * Make an array from the input value.
 *
 * @param {any} input
 * @param {boolean} makeUnique
 */
function arrayMake(input: any, makeUnique: boolean = false): any[] {
   let returnArray = [];

   /**
    * Determine what the input type is.
    */
   if (rocketIs.array(input)) {
      returnArray = input;
   } else if (rocketIs.element(input)) {
      returnArray.push(input);
   } else if (rocketIs.string(input)) {
      returnArray = input.split(' ');
   } else if (rocketIs.object(input)) {
      /**
       * Try and catch HTMLCollection and NodeList.
       */
      input = Array.prototype.slice.call(input);

      if (rocketIs.array(input) && input.length > 0) {
         returnArray = input;
      }
   }

   /**
    * Return the value based on the unique flag.
    */
   return (makeUnique) ? rocketArray.unique(returnArray) : returnArray;
}

/**
 * Make an array unique meaning that no value repeats.
 *
 * @param {any[]} input
 */
function arrayUnique(input: any[]): any[] {
   /**
    * Fail softly. Since the function is calling for a unique array, if
    * the input is not an array than just return an empty one.
    */
   if (!rocketIs.array(input)) {
      return [];
   } else {
      return input.filter((value: any, index: number, self: any) => {
         return self.indexOf(value) === index;
      });
   }
}

/**
 * Export.
 */
export const rocketArray = {
   clean: arrayClean,
   make: arrayMake,
   unique: arrayUnique
};
