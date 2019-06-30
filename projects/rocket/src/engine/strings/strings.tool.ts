/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is';

/**
 * Format a byte string into a human readable string.
 * As per Aliceljm:
 * http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 *
 * @param bytes - The bytes to format.
 * @param decimals - The amount of decimals places to return.
 */
function formatBytes(bytes: string, decimals: number = 2): string {
   if (typeof bytes !== 'number' || bytes == 0) {
      return '0 Byte';
   }

   let k = 1000;
   let dm = decimals + 1;
   let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   let i = Math.floor(Math.log(bytes) / Math.log(k));

   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Lowercase the whole string.
 *
 * @param string - The string modify.
 */
function lowercaseAll(string: string): string {
   return (RocketIs.string(string)) ? string.toLowerCase() : string;
}

/**
 * Lowercase the first letter of the string.
 *
 * @param string - The string modify.
 */
function lowercaseFirst(string: string): string {
   if (RocketIs.string(string)) {
      return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
   } else {
      return string;
   }
}

/**
 * Lowercase the last letter of the string.
 *
 * @param string - The string modify.
 */
function lowercaseLast(string: string): string {
   if (RocketIs.string(string)) {
      return `${string.slice(0, string.length - 1)}${string.charAt(string.length - 1).toLowerCase()}`;
   } else {
      return string;
   }
}

/**
 * Remove the first character of a string.
 *
 * @param string - The string modify.
 */
function removeFirst(string: string): string {
   return (RocketIs.string(string)) ? string.substring(1) : string;
}

/**
 * Remove the first and last characters of a string.
 *
 * @param string - The string modify.
 */
function removeFirstAndLast(string: string): string {
   if (RocketIs.string(string)) {
      return string.substring(1, string.length - 1);
   } else {
      return string;
   }
}

/**
 * Remove the last character of a string.
 *
 * @param string - The string modify.
 */
function removeLast(string: string): string {
   if (RocketIs.string(string)) {
      return string.substring(0, string.length - 1);
   } else {
      return string;
   }
}

/**
 * Remove all the spaces from a string.
 *
 * @param string - The string modify.
 */
function removeSpaces(string: string): string {
   return (RocketIs.string(string)) ? string.replace(/ /g, '') : string;
}

/**
 * Trim a string.
 *
 * @param string - The string modify.
 */
function stringTrim(string: string): string {
   if (RocketIs.string(string)) {
      return string.replace(/^ /, '').replace(/ +$/, '');
   } else {
      return string;
   }
}

/**
 * Uppercase the whole string.
 *
 * @param string - The string modify.
 */
function uppercaseAll(string: string): string {
   return (RocketIs.string(string)) ? string.toUpperCase() : string;
}

/**
 * Uppercase the first letter of the string.
 *
 * @param string - The string modify.
 */
function uppercaseFirst(string: string): string {
   if (RocketIs.string(string)) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
   } else {
      return string;
   }
}

/**
 * Uppercase the last letter of the string.
 *
 * @param string - The string modify.
 */
function uppercaseLast(string: string): string {
   if (RocketIs.string(string)) {
      return `${string.slice(0, string.length - 1)}${string.charAt(string.length - 1).toUpperCase()}`;
   } else {
      return string;
   }
}

/**
 * Exports.
 */
export const RocketString = {
   format: {
      bytes: formatBytes
   },
   remove: {
      first: removeFirst,
      firstAndLast: removeFirstAndLast,
      last: removeLast,
      spaces: removeSpaces
   },
   lowercase: {
      all: lowercaseAll,
      first: lowercaseFirst,
      last: lowercaseLast
   },
   trim: stringTrim,
   uppercase: {
      all: uppercaseAll,
      first: uppercaseFirst,
      last: uppercaseLast
   }
};
