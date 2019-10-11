/**
 * @author Chris Humboldt
 */

import { RocketExists } from './exists.tool';
import { imageExtensionList } from './extension.tool';
import { RocketRegExTest } from './regular-expression.tool';
import { RegEx } from '../store';

/**
 * Determine if an input is an array.
 *
 * @param check - The array to check.
 */
function isArray(check: any): boolean {
   return (typeof check === 'object' && check instanceof Array);
}

/**
 * Determine if an input is a boolean.
 *
 * @param check - The boolean to check.
 */
function isBoolean(check: any): boolean {
   return (typeof check === 'boolean');
}

/**
 * Determine if the current client is a browser.
 */
function isBrowser(): boolean {
   /**
    * A very basic check to detect if using a browser.
    * Lifted this directly from the Require.js check.
    * https://github.com/requirejs/requirejs/blob/master/require.js
    */
   return !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
}

/**
 * Determine if a string is a colour.
 *
 * @param check - The colour string to check.
 */
function isColour(check: string): boolean {
   return RocketRegExTest(check, RegEx.COLOUR);
}

/**
 * Determine is something is a date.
 *
 * @param check - The date string to check.
 */
function isDate(check: string): boolean {
   return RocketRegExTest(check, RegEx.DATE);
}

/**
 * Determine if the input is an element.
 *
 * @param check - The element to check.
 */
function isElement(check: any): boolean {
   return (RocketExists(check)) ? (check.nodeType && check.nodeType === 1) : false;
}

/**
 * Determine if the input is in an email format.
 *
 * @param check - The email string to check.
 */
function isEmail(check: string): boolean {
   return RocketRegExTest(check, RegEx.EMAIL);
}

/**
 * Determine if the input is a function.
 *
 * @param check - The function to check.
 */
function isFunction(check: any): boolean {
   return (typeof check === 'function');
}

/**
 * Determine if the input is an image, by checking against the image
 * extension list.
 *
 * @param check - The image string to check.
 * @param allowedTypes - The allowed type to check against.
 */
function isImage(check: any, allowedTypes: string[] = imageExtensionList): boolean {
   /**
    * Make sure the allowed types is an array. This caters for user defined
    * lists. If not fail the check.
    */
   if (!isArray(allowedTypes)) {
      return false;
   } else {
      return (allowedTypes.indexOf(check.split('.').pop().toLowerCase()) > -1);
   }
}

/**
 * Determine if the input is JSON.
 *
 * @param check - The JSON to check.
 */
function isJSON(check: any): boolean {
   if (typeof check !== 'object') {
      try {
         JSON.parse(check);
      } catch (e) {
         return false;
      }
   }

   return true;
}

/**
 * Determine if the input is a number.
 *
 * @param check - The number to check.
 */
function isNumber(check: any): boolean {
   return (typeof check === 'number' && !isNaN(check));
}

/**
 * Determine if the input is an object.
 *
 * @param check - The object to check.
 */
function isObject(check: any): boolean {
   return (typeof check === 'object');
}

/**
 * Determine if the input is in a password format.
 *
 * @param check - The password string to check.
 */
function isPassword(check: string): boolean {
   return RocketRegExTest(check, RegEx.PASSWORD);
}

/**
 * Determine if the input is a string.
 *
 * @param check - The string to check.
 */
function isString(check: any) {
   return (typeof check === 'string');
}

/**
 * Determine if the input is in a time format.
 *
 * @param check - The time string to check.
 */
function isTime(check: string): boolean {
   return RocketRegExTest(check, RegEx.TIME);
}

/**
 * Determine if the client is touch enabled.
 */
function isTouch() {
   if (!isBrowser() || !window || !window.console) {
      return false;
   } else {
      return 'ontouchstart' in window || 'onmsgesturechange' in window;
   }
}

/**
 * Determine if the input is in a url format.
 *
 * @param check - The url string to check.
 */
function isURL(check: string): boolean {
   return RocketRegExTest(check, RegEx.URL);
}

/**
 * Exports.
 */
export const RocketIs = {
   array: isArray,
   boolean: isBoolean,
   browser: isBrowser,
   color: isColour,
   colour: isColour,
   date: isDate,
   element: isElement,
   email: isEmail,
   function: isFunction,
   image: isImage,
   json: isJSON,
   number: isNumber,
   object: isObject,
   password: isPassword,
   string: isString,
   time: isTime,
   touch: isTouch,
   url: isURL
};
