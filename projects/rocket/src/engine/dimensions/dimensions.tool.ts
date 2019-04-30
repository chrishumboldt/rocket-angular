/**
 * @author Chris Humboldt
 */

import { RocketDOM } from '../dom';
import { RocketIs } from '../is';
import { RocketString } from '../strings';

/**
 * Get the height of an element.
 *
 * @param element
 */
function getHeight(element: any): number {
   return getWidthOrHeight(element, 'height');
}

/**
 * Get the width of an element.
 *
 * @param element
 */
function getWidth(element: any): number {
   return getWidthOrHeight(element, 'width');
}

/**
 * Get the width or height of an element.
 *
 * @param element
 * @param type
 */
function getWidthOrHeight(element: any, type: string): number {
   /**
    * If there are any catches return 0 as a safe fallback.
    */
   if (
      !RocketIs.browser()
      || !window
      || !window.console
      || (!RocketIs.element(element) && !RocketIs.string(element) && element !== window)
      || (RocketIs.string(type) && (type !== 'width' && type !== 'height'))
   ) {
      return 0;
   }

   let returnValue: any;

   /**
    * Check to see if the element is a window.
    */
   if (element === window) {
      type = RocketString.uppercase.first(type);
      returnValue = (
         window[`inner${type}`]
         || document.documentElement[`client${type}`]
         || document.body[`client${type}`]
      );
   } else {
      /**
       * Check if string selector.
       */
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

/**
 * Export.
 */
export const RocketDimension = {
   height: getHeight,
   width: getWidth
}
