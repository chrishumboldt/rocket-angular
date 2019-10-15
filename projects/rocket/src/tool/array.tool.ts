/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';

interface ArrayCleanOptions {
   data: any,
   hardClean?: boolean
}
interface ArrayRemoveOptions {
   index?: number;
   value?: any;
}

/**
 * Clean an array.
 *
 * @param options - The deconstructed options object.
 * @param options.data - The array to clean.
 * @param options.hardClean - A hard clean will clear out all failed data like undefined and null.
 */
function arrayClean({data, hardClean = false}: ArrayCleanOptions): any[] {
   if (!RocketIs.array(data)) {
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
         return data.filter((item: any) => {
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
         return data.filter((item: any) => item !== null);
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
 * Remove an entry from an array.
 *
 * @param input - The input array.
 * @param options - The deconstructed options object.
 * @param options.index - The index of the value to remove from the array.
 * @param options.value - The value to remove from the array.
 */
function arrayRemove(input: any[], {index, value}: ArrayRemoveOptions): void {
   /**
    * Catch.
    */
   if (!RocketIs.array(input)) {
      return;
   }

   /**
    * If we are removing by value then determine the index.
    */
   const theIndex = (name) ? input.indexOf(value) : index;
   /**
    * Now remove the entry.
    */
   input.splice(theIndex, 1);
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
   remove: arrayRemove,
   unique: arrayUnique
};
