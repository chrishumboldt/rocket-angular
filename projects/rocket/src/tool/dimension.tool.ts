/**
 * @author Chris Humboldt
 */

import { RocketDOM } from './dom.tool';
import { RocketIs } from './is.tool';
import { RocketString } from './string.tool';

/**
 * Get the height of an element.
 *
 * @param element - The element to check.
 */
function dimensionHeight(element: any): number {
   return dimensionWidthOrHeight(element, 'height');
}

/**
 * Get the full dimensions of an element.
 */
function dimensions(element: any): any {
   return {
      height: dimensionHeight(element),
      width: dimensionWidth(element)
   };
}

/**
 * Get the width of an element.
 *
 * @param element - The element to check.
 */
function dimensionWidth(element: any): number {
   return dimensionWidthOrHeight(element, 'width');
}

/**
 * Get the width or height of an element.
 *
 * @param element - The element to check.
 * @param type - The type to get, like height or width.
 */
function dimensionWidthOrHeight(element: any, type: string): number {
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
   } else {
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
}

/**
 * Export.
 */
export const RocketDimension = {
   dimensions,
   height: dimensionHeight,
   width: dimensionWidth
};
