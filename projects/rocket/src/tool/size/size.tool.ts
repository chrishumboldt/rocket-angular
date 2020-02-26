/**
 * @author Chris Humboldt
 */

import { Size, SizeWidthOrHeightParams } from '../../model/size.model';

import { RocketDOM } from '../dom/dom.tool';
import { RocketIs } from '../is/is.tool';
import { RocketString } from '../string/string.tool';

/**
 * Get the height of an element.
 *
 * @param element - The element to check.
 */
function sizeHeight(element: any): number {
  return sizeWidthOrHeight({ element, type: 'height' });
}

/**
 * Get the full size of an element.
 */
function size(element: any): Size {
  return new Size({
    height: sizeHeight(element),
    width: sizeWidth(element)
  });
}

/**
 * Get the width of an element.
 *
 * @param element - The element to check.
 */
function sizeWidth(element: any): number {
  return sizeWidthOrHeight({ element, type: 'width' });
}

/**
 * Get the width or height of an element.
 *
 * @param params - The deconstructed options object.
 * @param params.element - The element to check.
 * @param params.type - The type to get, like height or width.
 */
function sizeWidthOrHeight({
  element,
  type
}: SizeWidthOrHeightParams): number {
  // If there are any catches return 0 as a safe fallback.
  if (
    !RocketIs.browser() ||
    !window ||
    !window.console ||
    (!RocketIs.element(element) &&
      !RocketIs.string(element) &&
      element !== window) ||
    (RocketIs.string(type) && type !== 'width' && type !== 'height')
  ) {
    return 0;
  } else {
    let returnValue: any;

    // Check to see if the element is a window.
    if (element === window) {
      type = RocketString.uppercase.first(type);
      returnValue =
        window[`inner${type}`] ||
        document.documentElement[`client${type}`] ||
        document.body[`client${type}`];
    } else {
      // Check if string selector.
      if (RocketIs.string(element)) {
        element = RocketDOM.element(element);
      }

      if (element.getClientRects().length) {
        returnValue = element.getBoundingClientRect()[type];
      }

      if (returnValue < 1 || returnValue == null) {
        returnValue = element.style[type];
      }
    }

    return parseFloat(returnValue) || 0;
  }
}

export const RocketSize = {
  size,
  height: sizeHeight,
  width: sizeWidth
};
