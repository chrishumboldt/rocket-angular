/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';

interface FormatBytesOptions {
   bytes: string;
   decimals?: number;
};

/**
 * Format a byte string into a human readable string.
 * As per Aliceljm:
 * http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 *
 * @param options - The deconstructed options object.
 * @param options.bytes - The bytes to format.
 * @param options.decimals - The amount of decimals places to return.
 */
function formatBytes({ bytes, decimals = 2 }: FormatBytesOptions): string {
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
 * @param input - The string modify.
 */
function lowercaseAll(input: string = ''): string {
   return input.toString().toLowerCase();
}

/**
 * Lowercase the first letter of the string.
 *
 * @param input - The string modify.
 */
function lowercaseFirst(input: string = ''): string {
   const asString = input.toString();
   return `${asString.charAt(0).toLowerCase()}${asString.slice(1)}`;
}

/**
 * Lowercase the last letter of the string.
 *
 * @param input - The string modify.
 */
function lowercaseLast(input: string = ''): string {
   const asString = input.toString();
   return `${asString.slice(0, asString.length - 1)}${asString.charAt(asString.length - 1).toLowerCase()}`;
}

/**
 * Remove the first character of a string.
 *
 * @param input - The string modify.
 */
function removeFirst(input: string = ''): string {
   return input.toString().substring(1);
}

/**
 * Remove the first and last characters of a string.
 *
 * @param input - The string modify.
 */
function removeFirstAndLast(input: string = ''): string {
   const asString = input.toString();
   return asString.substring(1, asString.length - 1);
}

/**
 * Remove the last character of a string.
 *
 * @param input - The string modify.
 */
function removeLast(input: string = ''): string {
   const asString = input.toString();
   return asString.substring(0, asString.length - 1);
}

/**
 * Remove all the spaces from a string.
 *
 * @param input - The string modify.
 */
function removeSpaces(input: string = ''): string {
   return input.toString().replace(/ /g, '');
}

/**
 * Trim a string.
 *
 * @param input - The string modify.
 */
function stringTrim(input: string = ''): string {
   return input.toString().replace(/^ /, '').replace(/ +$/, '');
}

/**
 * Uppercase the whole string.
 *
 * @param input - The string modify.
 */
function uppercaseAll(input: string = ''): string {
   return (RocketIs.string(input)) ? input.toUpperCase() : input;
}

/**
 * Uppercase the first letter of the string.
 *
 * @param input - The string modify.
 */
function uppercaseFirst(input: string = ''): string {
   const asString = input.toString();
   return `${asString.charAt(0).toUpperCase()}${asString.slice(1)}`;
}

/**
 * Uppercase the last letter of the string.
 *
 * @param input - The string modify.
 */
function uppercaseLast(input: string = ''): string {
   const asString = input.toString();
   return `${asString.slice(0, asString.length - 1)}${asString.charAt(asString.length - 1).toUpperCase()}`;
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
