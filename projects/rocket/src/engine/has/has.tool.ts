/**
 * @author Chris Humboldt
 */

import { extensionList } from '../extensions';
import { RocketIs } from '../is';

/**
 * Check if an element has a class name.
 *
 * @param check - The element to check for.
 * @param classNames - The class names to check against.
 */
function hasClass(check: HTMLElement, classNames: string): boolean {
   return (' ' + check.className + ' ').indexOf(' ' + classNames + ' ') > -1;
}

/**
 * Check to see if a string fulfils the allowed extensions check.
 *
 * @param check - The string to check for.
 * @param allowedTypes - The allowed types to check against.
 */
function hasExtension(check: string, allowedTypes: string[] = extensionList): boolean {
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
 * Check to see if a string has any spaces.
 *
 * @param check - The string to test against.
 */
function hasSpaces(check: string): boolean {
   return /\s/.test(check);
}

/**
 * Export.
 */
export const RocketHas = {
   class: hasClass,
   spaces: hasSpaces,
   extension: hasExtension
};
