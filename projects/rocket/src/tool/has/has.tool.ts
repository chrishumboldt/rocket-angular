/**
 * @author Chris Humboldt
 */

import { Extension } from '../../store/extension.store';
import { RocketIs } from '../is/is.tool';
import { HasClassOptions, HasExtensionOptions } from '../../model/has.model';

const extensionList = Object.keys(Extension).map((key: string) => {
   return Extension[key];
});

/**
 * Check if an element has a class name.
 *
 * @param options - The deconstructed options object.
 * @param options.check - The element to check for.
 * @param options.has - The class names to check against.
 */
function hasClass({ check, has }: HasClassOptions): boolean {
   return (' ' + check.className + ' ').indexOf(' ' + has + ' ') > -1;
}

/**
 * Check to see if a string fulfils the allowed extensions check.
 *
 * @param options - The deconstructed options object.
 * @param options.allowedTypes - The allowed types to check against.
 * @param options.check - The string to check for.
 */
function hasExtension({
   allowedTypes = extensionList,
   check
}: HasExtensionOptions): boolean {
   /*
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

export const RocketHas = {
   class: hasClass,
   spaces: hasSpaces,
   extension: hasExtension
};
