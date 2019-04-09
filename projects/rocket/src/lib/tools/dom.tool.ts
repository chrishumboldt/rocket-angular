/**
 * @author Chris Humboldt
 */

import { rocketArray } from './arrays.tool';
import { rocketError } from './development.tool';
import { rocketExists } from './exists.tool';
import { rocketGet } from './gets.tool';
import { rocketIs } from './is.tool';
import { rocketString } from './strings.tool';

/**
 * Selectors types used by the DOM selectors.
 */
export enum SelectorType {
   GET_ELEMENT_BY_ID,
   GET_ELEMENT_BY_TAG,
   UNKNOWN,
   QUERY_SELECTOR_ALL,
}

/**
 * Return the elements of a web client should they be available.
 */
let domBody: HTMLBodyElement;
let domHead: HTMLHeadElement;
let domHTML: HTMLHtmlElement;
let domTitle: HTMLTitleElement;
let domWindow: Window;
if (typeof document != undefined) {
   domBody = document.getElementsByTagName('body')[0];
   domHead = document.getElementsByTagName('head')[0];
   domHTML = document.getElementsByTagName('html')[0];
   domTitle = document.getElementsByTagName('title')[0];
}
if (typeof window != undefined) {
   domWindow = window;
}

/**
 * Set the height of an element based on the width but apply a ration
 * multiplier if desired.
 *
 * @param {any} selector
 * @param {number} multiplier
 */
function domRatio(selector: any, multiplier: number = 1): void {
   const elements = domSelect(selector);

   /**
    * DOM select will alwasy return an array.
    */
   elements.forEach((item: HTMLElement) => {
      item.style.height = `${Math.floor(item.offsetWidth * multiplier)}px`;
   });
}

/**
 * Remove DOM elements from the client.
 *
 * @param {any} selector
 */
function domRemove(selector: any): void {
   /**
    * Catch if the elements does not exist and simply kill the execution.
    */
   if (!rocketExists(selector)) {
      return;
   }

   if (rocketIs.string(selector)) {
      const elementList = domSelect(selector);

      elementList.forEach((item: HTMLElement) => {
         domRemoveItem(item);
      });
   } else {
      domRemoveItem(selector);
   }
}

/**
 * Remove a single DOM element from the client.
 *
 * @param {HTMLElement} element
 */
function domRemoveItem(element: HTMLElement): void {
   if (rocketIs.element(element) && rocketIs.element(element.parentNode)) {
      element.parentNode.removeChild(element);
   }
}

/**
 * Get multiple elements. The method assumes that many elements exist
 * on the DOM with the "selectors". As such an array will ALWAYS be returned.
 * Even an ID selector will return an array as the user has requested
 * this particular method type. It's important to maintain consistency.
 *
 * @param {any} selector
 */
function domSelect(selector: any): HTMLElement[] {
   let elementList = [];

   /**
    * Determine the selection type.
    */
   if (rocketIs.string(selector)) {
      /**
       * String selectors are returned via another function.
       */
      elementList = elementList.concat(domSelectByString(selector));
   } else if (rocketIs.element(selector)) {
      /**
       * The selector is already and element so just added it in and return.
       */
      elementList.push(selector);
   } else if (rocketIs.array(selector)) {
      /**
       * An array requires inspecting each item in the array.
       */
      let stringSelectors = '';

      /**
       * Iterate over the selectors and determine the type.
       */
      selector.forEach((item: any) => {
         if (rocketIs.string(item)) {
            /**
             * The array item is a string.
             */
            stringSelectors += `${item},`;
         } else if (rocketIs.element(item)) {
            /**
             * The array item is an element.
             */
            elementList.push(item);
         }
      });
      /**
       * If there are any string selectors than fetch those and populate the
       * element list.
       */
      if (stringSelectors.length > 0) {
         elementList = elementList.concat(domSelectByString(stringSelectors));
      }
   } else if (rocketIs.object(selector)) {
      /**
       * An object has a few conditions that needs to be checked.
       */
      if (selector === window || selector === document) {
         elementList = [selector];
      } else {
         selector = Array.prototype.slice.call(selector);

         if (rocketIs.array(selector) && selector.length > 0) {
            elementList = selector;
         }
      }
   } else if (selector === window || selector === document) {
      /**
       * This is accomodating a strange interaction that can occur.
       */
      elementList = [selector];
   }
   /**
    * Now return the resulting element list.
    */
   return rocketArray.clean(rocketArray.unique(elementList), true);
}

/**
 * Select elements by string input.
 *
 * @param {string} selector
 */
function domSelectByString(selector: string): HTMLElement[] {
   let elementList = [];

   /**
    * Catch an empty selector.
    */
   if (selector && rocketIs.string(selector)) {
      const selectorSplit = rocketArray.clean(
         selector.split(',').map(rocketString.trim),
         true
      );

      /**
       * Iterate over the selector strings and get the elements.
       */
      selectorSplit.forEach((item: string) => {
         switch (rocketGet.selectorType(item)) {
            case SelectorType.GET_ELEMENT_BY_ID:
               elementList.push(document.getElementById(item.substring(1)));
               break;

            case SelectorType.GET_ELEMENT_BY_TAG:
               elementList = elementList.concat(Array.prototype.slice.call(document.getElementsByTagName(item)));
               break;

            case SelectorType.QUERY_SELECTOR_ALL:
               elementList = elementList.concat(Array.prototype.slice.call(document.querySelectorAll(item)));
               break;
         }
      });
   }

   /**
    * Return the result.
    */
   return elementList;
}

/**
 * Select the first, possibly unique element within the DOM. Only a single
 * element is required. The below uses a more performant
 * code block to complete this action.
 *
 * @param {any} selector
 */
function domSelectElement(selector: any): HTMLElement {
   /**
    * Catch non-web client sessions.
    */
   if (typeof document == undefined) {
      rocketError('You can only select an element within an html client.');
      return undefined;
   }
   /**
    * Determine the selector condition.
    */
   if (rocketIs.string(selector)) {
      /**
       * Work with a string selector input.
       */
      switch (rocketGet.selectorType(selector)) {
         case SelectorType.GET_ELEMENT_BY_ID:
            return document.getElementById(selector.substring(1));

         default:
            return document.querySelector(selector);
      }
   } else if (rocketIs.element(selector)) {
      /**
       * If the selector is an element than who knows why this function is being
       * called but just return the element back.
       */
      return selector;
   } else if (rocketIs.object(selector)) {
      /**
       * An object was detected so handle this use case properly.
       */
      if (selector === window || selector === document) {
         /**
          * Return document and window references.
          */
         return selector;
      } else {
         /**
          * Return the first found element in an array of elements.
          */
         selector = Array.prototype.slice.call(selector);

         if (rocketIs.array(selector) && selector.length > 0) {
            return selector[0];
         }
      }
   } else {
      /**
       * Fail correctly to undefined.
       */
      return undefined;
   }
}

/**
 * Export.
 */
export const rocketDOM = {
   body: domBody,
   element: domSelectElement,
   head: domHead,
   html: domHTML,
   ratio: domRatio,
   remove: domRemove,
   select: domSelect,
   title: domTitle,
   window: domWindow
};
