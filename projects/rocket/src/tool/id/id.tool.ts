/**
 * @author Chris Humboldt
 */

import { RocketExists } from '../exists/exists.tool';
import { IdAddParams } from '../../model/id.model';

/**
 * Add an id to a particular element.
 *
 * @param params - The deconstructed options object.
 * @param params.element - The element to to add the id to.
 * @param params.id - The id to apply.
 */
function idAdd({ element, id }: IdAddParams): void {
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
