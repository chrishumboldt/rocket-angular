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
   if (typeof bytes !== 'number' || bytes === 0) {
      return '0 Byte';
   }

   const k = 1000;
   const dm = decimals + 1;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Lowercase the whole string.
 *
 * @param inputString - The string modify.
 */
function lowercaseAll(inputString: string): string {
   return (RocketIs.string(inputString)) ? inputString.toLowerCase() : inputString;
}

/**
 * Lowercase the first letter of the string.
 *
 * @param inputString - The string modify.
 */
function lowercaseFirst(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return `${inputString.charAt(0).toLowerCase()}${inputString.slice(1)}`;
   } else {
      return inputString;
   }
}

/**
 * Lowercase the last letter of the string.
 *
 * @param inputString - The string modify.
 */
function lowercaseLast(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return `${inputString.slice(0, inputString.length - 1)}${inputString.charAt(inputString.length - 1).toLowerCase()}`;
   } else {
      return inputString;
   }
}

/**
 * Remove the first character of a string.
 *
 * @param inputString - The string modify.
 */
function removeFirst(inputString: string): string {
   return (RocketIs.string(inputString)) ? inputString.substring(1) : inputString;
}

/**
 * Remove the first and last characters of a string.
 *
 * @param inputString - The string modify.
 */
function removeFirstAndLast(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return inputString.substring(1, inputString.length - 1);
   } else {
      return inputString;
   }
}

/**
 * Remove the last character of a string.
 *
 * @param inputString - The string modify.
 */
function removeLast(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return inputString.substring(0, inputString.length - 1);
   } else {
      return inputString;
   }
}

/**
 * Remove all the spaces from a string.
 *
 * @param inputString - The string modify.
 */
function removeSpaces(inputString: string): string {
   return (RocketIs.string(inputString)) ? inputString.replace(/ /g, '') : inputString;
}

/**
 * Trim a string.
 *
 * @param inputString - The string modify.
 */
function stringTrim(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return inputString.replace(/^ /, '').replace(/ +$/, '');
   } else {
      return inputString;
   }
}

/**
 * Uppercase the whole string.
 *
 * @param inputString - The string modify.
 */
function uppercaseAll(inputString: string): string {
   return (RocketIs.string(inputString)) ? inputString.toUpperCase() : inputString;
}

/**
 * Uppercase the first letter of the string.
 *
 * @param inputString - The string modify.
 */
function uppercaseFirst(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return `${inputString.charAt(0).toUpperCase()}${inputString.slice(1)}`;
   } else {
      return inputString;
   }
}

/**
 * Uppercase the last letter of the string.
 *
 * @param inputString - The string modify.
 */
function uppercaseLast(inputString: string): string {
   if (RocketIs.string(inputString)) {
      return `${inputString.slice(0, inputString.length - 1)}${inputString.charAt(inputString.length - 1).toUpperCase()}`;
   } else {
      return inputString;
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
