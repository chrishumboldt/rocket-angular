/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is';

/**
 * Clean an array.
 *
 * @param input - The array to clean.
 */
function arrayClean(input: any, hardClean: boolean = false): any[] {
   if (!RocketIs.array(input)) {
      /**
       * If the input is not an array then assume that the array is empty.
       * This is an acceptable "soft" fail.
       */
      return [];
   } else {
      if (hardClean) {
         /**
          * A hard clean only accepts populated values that are defined.
          */
         return input.filter((item: any) => {
            return (
               item !== null
               && item !== undefined
               && (RocketIs.string(item) ? item.length > 1 : true)
            );
         });
      } else {
         /**
          * A soft clean filters out NULL entries. Undefined is considered an
          * acceptable entry in the array.
          */
         return input.filter((item: any) => item !== null);
      }
   }
}

/**
 * Make an array from the input value.
 *
 * @param input - The input value.
 * @param makeUnique - Determine if the array should be unique.
 */
function arrayMake(input: any, makeUnique: boolean = false): any[] {
   let returnArray = [];

   /**
    * Determine what the input type is.
    */
   if (RocketIs.array(input)) {
      returnArray = input;
   } else if (RocketIs.element(input)) {
      returnArray.push(input);
   } else if (RocketIs.string(input)) {
      returnArray = input.split(' ');
   } else if (RocketIs.object(input)) {
      /**
       * Try and catch HTMLCollection and NodeList.
       */
      input = Array.prototype.slice.call(input);

      if (RocketIs.array(input) && input.length > 0) {
         returnArray = input;
      }
   }

   /**
    * Return the value based on the unique flag.
    */
   return (makeUnique) ? arrayUnique(returnArray) : returnArray;
}

/**
 * Make an array unique meaning that no value repeats.
 *
 * @param input - The array to check.
 */
function arrayUnique(input: any[]): any[] {
   /**
    * Fail softly. Since the function is calling for a unique array, if
    * the input is not an array than just return an empty one.
    */
   if (!RocketIs.array(input)) {
      return [];
   } else {
      return input.filter((value: any, index: number, self: any) => {
         return self.indexOf(value) === index;
      });
   }
}

/**
 * Manage arrays.
 */
export const RocketArray = {
   clean: arrayClean,
   make: arrayMake,
   unique: arrayUnique
};
