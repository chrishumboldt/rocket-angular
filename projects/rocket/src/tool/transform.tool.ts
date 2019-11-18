/**
 * @author Chris Humboldt
 */

import { RocketString } from './string.tool';

/**
 * The interfaces.
 */
interface EnumTransformOptions {
   theEnum: any;
   reverse: boolean;
}

/**
 * Transform an enum into an array of objects.
 *
 * @param options - The deconstructed options object.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 * @param options.theEnum - The passed in enum.
 */
function enumToArray({ reverse = true, theEnum }: EnumTransformOptions): any[] {
   return Object.keys(theEnum).map((key: string) => {
      return {
         value: (reverse) ? theEnum[key] : key,
         key: (reverse) ? this.enumKeyToPhrase(key) : theEnum[key]
      };
   });
}

/**
 * Transform an enum into a map.
 *
 * @param options - The deconstructed options object.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 * @param options.theEnum - The passed in enum.
 */
function enumToMap({ reverse = true, theEnum }: EnumTransformOptions): any {
   const theMap = {};

   Object.keys(theEnum).forEach((key: string) => {
      if (reverse) {
         theMap[theEnum[key]] = this.enumKeyToPhrase(key);
      } else {
         theMap[key] = theEnum[key];
      }
   });

   return theMap;
}

/**
 * Transform an enum key to a string phrase.
 *
 * @param enumKey - The passed in enum key.
 */
function enumKeyToPhrase(enumKey: string): string {
   return enumKey
      .split('_')
      .map((splitItem: string) => {
         if (splitItem.length < 3) {
            return RocketString.uppercase.all(splitItem);
         } else {
            return splitItem;
         }
      })
      .join(' ');
}

/**
 * Exports.
 */
export const RocketTransform = {
   enumToArray,
   enumToMap,
   enumKeyToPhrase
};
