/**
 * @author Chris Humboldt
 */

import { ImageExtension } from '../../store/extension.store';
import { RegEx } from '../../store/reg-ex.store';
import { RocketExists } from '../exists/exists.tool';
import { IsImageOptions } from '../../model/is.model';
import { RocketRegExTest } from '../reg-ex/reg-ex.tool';

/**
 * Image extensions list.
 */
const imageExtensionList = Object.keys(ImageExtension).map((key: string) => {
   return ImageExtension[key];
});

/**
 * Determine if an data is an array.
 *
 * @param check - The array to check.
 */
function isArray(check: any): boolean {
   return (typeof check === 'object' && check instanceof Array);
}

/**
 * Determine if an data is a boolean.
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
 * Determine is something is a date.
 *
 * @param check - The date to check.
 */
function isDate(check: any): boolean {
   return (typeof check === 'object' && check instanceof Date);
}

/**
 * Determine if the data is an element.
 *
 * @param check - The element to check.
 */
function isElement(check: any): boolean {
   return (RocketExists(check)) ? (check.nodeType && check.nodeType === 1) : false;
}

/**
 * Determine if the data is in an email format.
 *
 * @param check - The email string to check.
 */
function isEmail(check: string): boolean {
   return RocketRegExTest({check, regEx: RegEx.EMAIL});
}

/**
 * Determine if the data is a function.
 *
 * @param check - The function to check.
 */
function isFunction(check: any): boolean {
   return (typeof check === 'function');
}

/**
 * Determine if a string is a colour.
 *
 * @param check - The colour string to check.
 */
function isHexColour(check: string): boolean {
   return RocketRegExTest({check, regEx: RegEx.COLOUR});
}

/**
 * Determine if the data is an image, by checking against the image
 * extension list.
 *
 * @param options - The deconstructed options object.
 * @param options.allowedTypes - The allowed type to check against.
 * @param options.check - The image string to check.
 */
function isImage({
   allowedTypes = imageExtensionList,
   check
}: IsImageOptions): boolean {
   /**
    * Make sure the allowed types is an array. This caters for user defined
    * lists. If not fail the check.
    */
   if (!isArray(allowedTypes) || check === undefined || check === null || check.length < 1) {
      return false;
   } else {
      return (allowedTypes.includes(check.split('.').pop().toLowerCase()));
   }
}

/**
 * Determine if the data is JSON.
 *
 * @param check - The JSON to check.
 */
function isJSON(check: any): boolean {
   if (isObject(check)) {
      return (!isArray(check) && !isDate(check) && !isMap(check));
   } else {
      try {
         JSON.parse(check);
      } catch (error) {
         return false;
      }
   }
}

/**
 * Determine if an data is a map.
 *
 * @param check - The map to check.
 */
function isMap(check: any): boolean {
   return (typeof check === 'object' && check instanceof Map);
}

/**
 * Determine if the data is a number.
 *
 * @param check - The number to check.
 */
function isNumber(check: any): boolean {
   return (typeof check === 'number' && Number.isInteger(check));
}

/**
 * Determine if the data is an object.
 *
 * @param check - The object to check.
 */
function isObject(check: any): boolean {
   return (typeof check === 'object');
}

/**
 * Determine if the data is in a password format.
 *
 * @param check - The password string to check.
 */
function isPassword(check: string): boolean {
   return RocketRegExTest({check, regEx: RegEx.PASSWORD});
}

/**
 * Determine if the data is a string.
 *
 * @param check - The string to check.
 */
function isString(check: any) {
   return (typeof check === 'string');
}

/**
 * Determine if the data is in a time format.
 *
 * @param check - The time string to check.
 */
function isTime(check: string): boolean {
   return RocketRegExTest({check, regEx: RegEx.TIME});
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
 * Determine if the data is in a url format.
 *
 * @param check - The url string to check.
 */
function isURL(check: string): boolean {
   return RocketRegExTest({check, regEx: RegEx.URL});
}

/**
 * Exports.
 */
export const RocketIs = {
   array: isArray,
   boolean: isBoolean,
   browser: isBrowser,
   date: isDate,
   element: isElement,
   email: isEmail,
   function: isFunction,
   hexColor: isHexColour,
   hexColour: isHexColour,
   image: isImage,
   json: isJSON,
   map: isMap,
   number: isNumber,
   object: isObject,
   password: isPassword,
   string: isString,
   time: isTime,
   touch: isTouch,
   url: isURL
};
