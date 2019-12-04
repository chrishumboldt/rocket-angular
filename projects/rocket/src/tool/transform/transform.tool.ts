/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is/is.tool';
import {
   TransformBytesOptions,
   TransformEnumOptions
} from '../../model/transform.model';
import { RocketString } from '../string/string.tool';

/**
 * Transform an enum into an array of objects.
 *
 * @param options - The deconstructed options object.
 * @param options.data - The passed in enum.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 */
function enumToArray({ data, reverse = true }: TransformEnumOptions): any[] {
   return Object.keys(data).map((key: string) => {
      return {
         value: (reverse) ? data[key] : key,
         key: (reverse) ? this.enumKeyToPhrase(key) : data[key]
      };
   });
}

/**
 * Transform an enum into a map.
 *
 * @param options - The deconstructed options object.
 * @param options.data - The passed in enum.
 * @param options.reverse - Reverse the key value mapping of the returned object.
 */
function enumToMap({ data, reverse = true }: TransformEnumOptions): any {
   const theMap = {};

   Object.keys(data).forEach((key: string) => {
      if (reverse) {
         theMap[data[key]] = this.enumKeyToPhrase(key);
      } else {
         theMap[key] = data[key];
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
 * Format a byte string into a human readable string.
 * As per Aliceljm:
 * http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 *
 * @param options - The deconstructed options object.
 * @param options.bytes - The bytes to format.
 * @param options.decimals - The amount of decimals places to return.
 */
function transformBytes({ bytes, decimals = 2 }: TransformBytesOptions): string {
   if (!RocketIs.number(bytes) || bytes === 0) {
      return '0 Byte';
   }

   const k = 1000;
   const dm = decimals + 1;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Exports.
 */
export const RocketTransform = {
   bytes: transformBytes,
   enumToArray,
   enumToMap,
   enumKeyToPhrase
};
