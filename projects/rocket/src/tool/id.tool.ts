/**
 * @author Chris Humboldt
 */

import { RocketExists } from './exists.tool';

/**
 * Interfaces.
 */
interface IdAddOptions {
   element: HTMLElement;
   id: string;
}

/**
 * Add an id to a particular element.
 *
 * @param options - The deconstructed options object.
 * @param options.element - The element to to add the id to.
 * @param options.id - The id to apply.
 */
function idAdd({ element, id }: IdAddOptions): void {
   if (RocketExists(element)) {
      element.setAttribute('id', id);
   }
}

/**
 * Add an id from a particular element.
 *
 * @param element - The element that needs to id removed from.
 */
function idRemove(element: HTMLElement): void {
   if (RocketExists(element)) {
      element.removeAttribute('id');
   }
}

export const RocketId = {
   add: idAdd,
   remove: idRemove
};
