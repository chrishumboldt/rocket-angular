/**
 * @author Chris Humboldt
 */

import { RocketString } from './strings.tool';

/**
 * Transform an enum into an array of objects.
 *
 * @param theEnum - The passed in enum.
 * @param reverse - Reverse the key value mapping of the returned object.
 */
function enumToArray(theEnum: any, reverse: boolean = true): any[] {
   return Object.keys(theEnum).map((key: string) => {
      return {
         value: (reverse) ? theEnum[key] : key,
         body: (reverse) ? this.enumKeyToPhrase(key) : theEnum[key]
      };
   });
}

/**
 * Transform an enum into a map.
 *
 * @param theEnum - The passed in enum.
 * @param reverse - Reverse the key value mapping of the returned object.
 */
function enumToMap(theEnum: any, reverse: boolean = true): any {
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
