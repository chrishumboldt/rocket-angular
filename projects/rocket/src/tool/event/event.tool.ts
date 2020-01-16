/**
 * @author Chris Humboldt
 */

import { EventApplyOptions, EventOptions } from '../../model/event.model';
import { EventAction } from '../../store/event.store';
import { RocketDOM } from '../dom/dom.tool';

/**
 * Add a new event to elements.
 *
 * @param options - The deconstructed options object.
 * @param options.eventHandler - The event handler.
 * @param options.selector - The elements to select and attach the event to.
 * @param options.type - The type of event
 */
function eventAdd({
   eventHandler,
   selector,
   type
}: EventOptions): void {
   eventApply({action: EventAction.ADD, eventHandler, selector, type});
}

/**
 * Apply a new event to a target element.
 *
 * @param options - The deconstructed options object.
 * @param options.action - Set if adding or remove the event.
 * @param options.eventHandler - The event handler.
 * @param options.selector - The elements to select and attach the event to.
 * @param options.type - The type of event
 */
function eventApply({
   action = EventAction.ADD,
   eventHandler,
   selector,
   type = 'click'
}: EventApplyOptions): void {
   const elements = RocketDOM.select(selector);

   // Iterate over each element and attach the event.
   elements.forEach((element: any) => {
      switch(action) {
         case EventAction.ADD:
            if (element.addEventListener) {
               element.addEventListener(type, eventHandler, false);
            } else if (element.attachEvent) {
               element.attachEvent('on' + type, eventHandler);
            } else {
               element[`on${type}`] = eventHandler;
            }
            break;

         case EventAction.REMOVE:
            if (element.removeEventListener) {
               element.removeEventListener(type, eventHandler, false);
            } else if (element.detachEvent) {
               element.detachEvent('on' + type, eventHandler);
            } else {
               delete element[`on${type}`];
            }
            break;
      }
   });
}

/**
 * Remove and event from elements.
 *
 * @param options - The deconstructed options object.
 * @param options.eventHandler - The event handler.
 * @param options.selector - The elements to select and attach the event to.
 * @param options.type - The type of event
 */
function eventRemove({
   eventHandler,
   selector,
   type
}: EventOptions): void {
   eventApply({action: EventAction.REMOVE, eventHandler, selector, type});
}

export const RocketEvent = {
   add: eventAdd,
   remove: eventRemove
}
