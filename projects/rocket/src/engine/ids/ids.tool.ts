/**
 * @author Chris Humboldt
 */

import { RocketExists } from '../exists';

/**
 * Add an id to a particular element.
 *
 * @param element
 * @param id
 */
function idAdd(element: HTMLElement, id: string): void {
   if (RocketExists(element)) {
      element.setAttribute('id', id);
   }
}

/**
 * Add an id from a particular element.
 *
 * @param element
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
