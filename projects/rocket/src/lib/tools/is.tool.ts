/**
 * @author Chris Humboldt
 */

import { RegEx } from '../stores';
import { RocketExists } from './exists.tool';
import { imageExtensionList } from './extensions.tool';
import { regExTest } from './regular-expressions.tool';

/**
 * Determine if an input is an array.
 *
 * @param check
 */
function isArray(check: any): boolean {
   return (typeof check === 'object' && check instanceof Array);
}

/**
 * Determine if an input is a boolean.
 *
 * @param check
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
 * @param check
 */
function isColour(check: string): boolean {
   return regExTest(check, RegEx.COLOUR);
}

/**
 * Determine is something is a date.
 *
 * @param check
 */
function isDate(check: string): boolean {
   return regExTest(check, RegEx.DATE);
}

/**
 * Determine if the input is an element.
 *
 * @param check
 */
function isElement(check: any): boolean {
   return (RocketExists(check)) ? (check.nodeType && check.nodeType === 1) : false;
}

/**
 * Determine if the input is in an email format.
 *
 * @param check
 */
function isEmail(check: string): boolean {
   return regExTest(check, RegEx.EMAIL);
}

/**
 * Determine if the input is a function.
 *
 * @param check
 */
function isFunction(check: any): boolean {
   return (typeof check === 'function');
}

/**
 * Determine if the input is an image, by checking against the image
 * extension list.
 *
 * @param check
 * @param allowedTypes
 */
function isImage(check: any, allowedTypes: string[] = imageExtensionList): boolean {
   /**
    * Make sure the allowed types is an array. This caters for user defined
    * lists. If not fail the check.
    */
   if (!RocketIs.array(allowedTypes)) {
      return false;
   } else {
      return (allowedTypes.indexOf(check.split('.').pop().toLowerCase()) > -1);
   }
}

/**
 * Determine if the input is an integer.
 *
 * @param check
 */
function isInteger(check: any): boolean {
   return (check ^ 0) === check;
}

/**
 * Determine if the input is JSON.
 *
 * @param check
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
 * @param check
 */
function isNumber(check: any): boolean {
   return (typeof check === 'number' && !isNaN(check));
}

/**
 * Determine if the input is an object.
 *
 * @param check
 */
function isObject(check: any): boolean {
   return (typeof check === 'object');
}

/**
 * Determine if the input is in a password format.
 *
 * @param check
 */
function isPassword(check: string): boolean {
   return regExTest(check, RegEx.PASSWORD);
}

/**
 * Determine if the input is a string.
 *
 * @param check
 */
function isString(check: any) {
   return (typeof check === 'string');
}

/**
 * Determine if the input is in a time format.
 *
 * @param check
 */
function isTime(check: string): boolean {
   return regExTest(check, RegEx.TIME);
}

/**
 * Determine if the client is touch enabled.
 */
function isTouch() {
   if (!RocketIs.browser() || !window || !window.console) {
      return false;
   } else {
      return 'ontouchstart' in window || 'onmsgesturechange' in window;
   }
}

/**
 * Determine if the input is in a url format.
 *
 * @param check
 */
function isURL(check: string): boolean {
   return regExTest(check, RegEx.URL);
}

/**
 * Export.
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
   integer: isInteger,
   json: isJSON,
   number: isNumber,
   object: isObject,
   password: isPassword,
   string: isString,
   time: isTime,
   touch: isTouch,
   url: isURL
}
