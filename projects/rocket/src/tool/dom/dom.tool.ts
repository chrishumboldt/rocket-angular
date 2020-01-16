/**
 * @author Chris Humboldt
 */

import { SelectorType } from '../../store/selector.store';
import { RocketArray } from '../array/array.tool';
import { RocketExists } from '../exists/exists.tool';
import { RocketGet } from '../get/get.tool';
import { RocketIs } from '../is/is.tool';
import { DomAddOptions, DomRatioOptions } from '../../model/dom.model';

/**
 * Return the elements of a web client should they be available.
 */
let domBody: HTMLBodyElement;
let domHead: HTMLHeadElement;
let domHTML: HTMLHtmlElement;
let domTitle: HTMLTitleElement;
let domWindow: Window;
if (typeof document !== undefined) {
   domBody = document.getElementsByTagName('body')[0];
   domHead = document.getElementsByTagName('head')[0];
   domHTML = document.getElementsByTagName('html')[0];
   domTitle = document.getElementsByTagName('title')[0];
}
if (typeof window !== undefined) {
   domWindow = window;
}

/**
 * Add an element to the dom.
 *
 * @param options - The deconstructed options object.
 * @param options.element - The element to add.
 * @param options.to - The DOM element to attach the element to. This can be a selector or an element
 */
function domAdd({ element, to }: DomAddOptions): void {
   // Catch the passed in selector argument and the element itself.
   if (!RocketExists(to) || !RocketIs.element(element)) {
      return;
   }

   /*
    * First retrieve the parent elements and then attach the new element as a child
    * node to each one in the list.
    */
   const parents = domSelect(to);

   if (parents && parents.length > 0) {
      parents.forEach((item: HTMLElement) => {
         item.appendChild(element);
      });
   }
}

/**
 * Set the height of an element based on the width but apply a ratio
 * multiplier if desired.
 *
 * @param options - The deconstructed options object.
 * @param options.multiplier - How much to multiply the width value by.
 * @param options.selector - The selector of the DOM element.
 */
function domRatio({ multiplier = 1, selector }: DomRatioOptions): void {
   const elements = domSelect(selector);

   // DOM select will always return an array.
   elements.forEach((item: HTMLElement) => {
      item.style.height = `${Math.floor(item.offsetWidth * multiplier)}px`;
   });
}

/**
 * Remove DOM elements from the client.
 *
 * @param selector - The selector of the DOM element.
 */
function domRemove(selector: any): void {
   // Catch the passed in selector argument.
   if (!RocketExists(selector)) {
      return;
   }

   if (RocketIs.string(selector)) {
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
 * @param element - The selector of the DOM element.
 */
function domRemoveItem(element: HTMLElement): void {
   if (RocketIs.element(element) && RocketIs.element(element.parentNode)) {
      element.parentNode.removeChild(element);
   }
}

/**
 * Get multiple elements. The method assumes that many elements exist
 * on the DOM with the "selectors". As such an array will ALWAYS be returned.
 * Even an ID selector will return an array as the user has requested
 * this particular method type. It's important to maintain consistency.
 *
 * @param selector - The selector of the DOM element.
 */
function domSelect(selector: any): HTMLElement[] {
   let elementList = [];

   // Determine the selection type.
   if (RocketIs.string(selector)) {
      // String selectors are returned via another function.
      elementList = elementList.concat(domSelectByString(selector));
   } else if (RocketIs.element(selector)) {
      // The selector is already an element so just added it in and return.
      elementList.push(selector);
   } else if (RocketIs.array(selector)) {
      // An array requires inspecting each item in the array.
      let stringSelectors = '';

      // Iterate over the selectors and determine the type.
      selector.forEach((item: any) => {
         if (RocketIs.string(item)) {
            // The array item is a string.
            stringSelectors += `${item},`;
         } else if (RocketIs.element(item)) {
            // The array item is an element.
            elementList.push(item);
         }
      });
      /*
       * If there are any string selectors than fetch those and populate the
       * element list.
       */
      if (stringSelectors.length > 0) {
         elementList = elementList.concat(domSelectByString(stringSelectors));
      }
   } else if (RocketIs.object(selector)) {
      // An object has a few conditions that needs to be checked.
      if (selector === window || selector === document) {
         elementList = [selector];
      } else {
         selector = Array.prototype.slice.call(selector);

         if (RocketIs.array(selector) && selector.length > 0) {
            elementList = selector;
         }
      }
   } else if (selector === window || selector === document) {
      // This is accomodating a strange interaction that can occur.
      elementList = [selector];
   }

   // Now return the resulting element list.
   return RocketArray.clean({
      data: RocketArray.unique(elementList),
      hardClean: true
   });
}

/**
 * Select elements by string data.
 *
 * @param selector - The selector of the DOM element.
 */
function domSelectByString(selector: string): HTMLElement[] {
   let elementList = [];

   // Check the selector.
   if (selector && RocketIs.string(selector)) {
      const selectorSplit = RocketArray.clean({
         data: selector.split(',').map((item: string) => item.trim()),
         hardClean: true
      });

      // Iterate over the selector strings and get the elements.
      selectorSplit.forEach((item: string) => {
         switch (RocketGet.selectorType(item)) {
            case SelectorType.DOCUMENT:
               elementList = elementList.concat(document);
               break;

            case SelectorType.GET_ELEMENT_BY_ID:
               elementList.push(document.getElementById(item.substring(1)));
               break;

            case SelectorType.GET_ELEMENT_BY_TAG:
               elementList = elementList.concat(Array.from(document.getElementsByTagName(item)));
               break;

            case SelectorType.QUERY_SELECTOR_ALL:
               elementList = elementList.concat(Array.from(document.querySelectorAll(item)));
               break;

            case SelectorType.WINDOW:
               elementList = elementList.concat(RocketDOM.window);
               break;
         }
      });
   }

   return elementList;
}

/**
 * Select the first, possibly unique element within the DOM. Only a single
 * element is required. The below uses a more performant
 * code block to complete this action.
 *
 * @param selector - The selector of the DOM element.
 */
function domSelectElement(selector: any): HTMLElement {
   // Catch non-web client sessions.
   if (typeof document === undefined) {
      console.error('You can only select an element within a DOM window.');
      return undefined;
   }

   // Determine the selector condition.
   if (RocketIs.string(selector)) {
      // Work with a string selector data.
      switch (RocketGet.selectorType(selector)) {
         case SelectorType.GET_ELEMENT_BY_ID:
            return document.getElementById(selector.substring(1));

         default:
            return document.querySelector(selector);
      }
   } else if (RocketIs.element(selector)) {
      /*
       * If the selector is an element than who knows why this function is being
       * called but just return the element back.
       */
      return selector;
   } else if (RocketIs.object(selector)) {
      // An object was detected so handle this use case properly.
      if (selector === window || selector === document) {
         // Return document and window references.
         return selector;
      } else {
         // Return the first found element in an array of elements.
         selector = Array.prototype.slice.call(selector);

         if (RocketIs.array(selector) && selector.length > 0) {
            return selector[0];
         }
      }
   } else {
      // Fail correctly to undefined.
      return undefined;
   }
}

export const RocketDOM = {
   add: domAdd,
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
