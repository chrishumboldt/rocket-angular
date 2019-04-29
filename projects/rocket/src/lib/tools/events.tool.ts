/**
 * @author Chris Humboldt
 */

import { RocketDOM } from './dom.tool';
import { RocketIs } from './is.tool';

/**
 * Attach events to elements. Will fallback to older implementations.
 *
 * @param elements
 * @param eventType
 * @param eventHandler
 */
function eventAdd(
   elements: any,
   eventType = 'click',
   eventHandler: Function
): void {
   eventApply(elements, eventType, eventHandler, true);
}

/**
 * Apply the attachment of the desired event to all the elements listed.
 *
 * @param elements
 * @param eventType
 * @param eventHandler
 * @param eventAdd
 */
function eventApply(
   elements: any,
   eventType: string = 'click',
   eventHandler: Function,
   eventAdd = true
): void {
   const domElements = RocketDOM.select(elements);

   /**
    * Catches.
    */
   if (domElements.length < 1 || !RocketIs.function(eventHandler)) {
      return;
   }

   /**
    * We expect a list of HTML Elements but Typescript type checking complains
    * about attachEvent and detachEvent which is to be expect honestly.
    */
   domElements.forEach((element: any) => {
      /**
       * Determine if the event is being added or removed from the element.
       */
      if (eventAdd) {
         if (element.addEventListener) {
            element.addEventListener(eventType, eventHandler, false);
         } else if (element.attachEvent) {
            element.attachEvent(`on${eventType}`, eventHandler);
         } else {
            element[`on${eventType}`] = eventHandler;
         }
      } else {
         if (element.removeEventListener) {
            element.removeEventListener(eventType, eventHandler, false);
         } else if (element.detachEvent) {
            element.detachEvent(`on${eventType}`, eventHandler);
         } else {
            element[`on${eventType}`] = eventHandler;
         }
      }
   });
};

/**
 * Remove an event from elements. Will fallback to older implementations
 * just like the event add function.
 *
 * @param elements
 * @param eventType
 * @param eventHandler
 */
function eventRemove(
   elements: any,
   eventType = 'click',
   eventHandler: Function
): void {
   eventApply(elements, eventType, eventHandler, false);
}

export const RocketEvent = {
   add: eventAdd,
   remove: eventRemove
};
