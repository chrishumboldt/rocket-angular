/**
 * @author Chris Humboldt
 */

import { RocketString } from './string.tool';

/**
 * The interfaces.
 */
interface EnumTransformOptions {
   input: any;
   reverse: boolean;
}

/**
 * Transform an enum into an array of objects.
 *
 * @param options - The deconstructed options object.
 * @param options.input - The passed in enum.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 */
function enumToArray({ input, reverse = true }: EnumTransformOptions): any[] {
   return Object.keys(input).map((key: string) => {
      return {
         value: (reverse) ? input[key] : key,
         key: (reverse) ? this.enumKeyToPhrase(key) : input[key]
      };
   });
}

/**
 * Transform an enum into a map.
 *
 * @param options - The deconstructed options object.
 * @param options.input - The passed in enum.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 */
function enumToMap({ input, reverse = true }: EnumTransformOptions): any {
   const theMap = {};

   Object.keys(input).forEach((key: string) => {
      if (reverse) {
         theMap[input[key]] = this.enumKeyToPhrase(key);
      } else {
         theMap[key] = input[key];
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
