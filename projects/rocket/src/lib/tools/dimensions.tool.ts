/**
 * @author Chris Humboldt
 */

import { rocketDOM } from './dom.tool';
import { rocketIs } from './is.tool';
import { rocketString } from './strings.tool';

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
      !rocketIs.browser()
      || !window
      || !window.console
      || (!rocketIs.element(element) && !rocketIs.string(element) && element !== window)
      || (rocketIs.string(type) && (type !== 'width' && type !== 'height'))
   ) {
      return 0;
   }

   let returnValue: any;

   /**
    * Check to see if the element is a window.
    */
   if (element === window) {
      type = rocketString.uppercase.first(type);
      returnValue = (
         window[`inner${type}`]
         || document.documentElement[`client${type}`]
         || document.body[`client${type}`]
      );
   } else {
      /**
       * Check if string selector.
       */
      if (rocketIs.string(element)) {
         element = rocketDOM.element(element);
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
export const rocketDimension = {
   height: getHeight,
   width: getWidth
}
