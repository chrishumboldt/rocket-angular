/**
 * @author Chris Humboldt
 */

import { extensionList } from './extensions.tool';
import { rocketIs } from './is.tool';

/**
 * Check if an element has a class name.
 *
 * @param check
 * @param element
 */
function hasClass(check: string, element: Element): boolean {
   return (' ' + element.className + ' ').indexOf(' ' + check + ' ') > -1;
}

/**
 * Check to see if a string fullfills the allowed extensions check.
 *
 * @param check
 * @param allowedTypes
 */
function hasExtension(check: string, allowedTypes: string[] = extensionList): boolean {
   /**
    * Make sure the allowed types is an array. This caters for user defined
    * lists. If not fail the check.
    */
   if (!rocketIs.array(allowedTypes)) {
      return false;
   } else {
      return (allowedTypes.indexOf(check.split('.').pop().toLowerCase()) > -1);
   }
}

/**
 * Check to see if a string has any spaces.
 *
 * @param check
 */
function hasSpaces(check: string): boolean {
   return /\s/.test(check);
}

/**
 * Export.
 */
export const rocketHas = {
   class: hasClass,
   spaces: hasSpaces,
   extension: hasExtension
};
