/**
 * @author Chris Humboldt
 */

import { RegEx } from '../../store/reg-ex.store';
import { SelectorType } from '../../store/selector.store';
import { RocketHas } from '../has/has.tool';
import { RocketRegExTest } from '../reg-ex/reg-ex.tool';

/**
 * Get the extension of a string.
 *
 * @param data - The data.
 */
function getExtension(data: string): string {
   return data.split('.').pop().toLowerCase();
}

/**
 * Get the index of a node within its parent.
 *
 * @param node - The node of the element list.
 */
function getIndex(node: any): number {
   return [].indexOf.call(node.parentNode.children, node);
}

/**
 * Get the selector type based on a string version of the seleector. Used
 * mainly when using the DOM tools.
 *
 * @param selector - The selector of the DOM element.
 */
function getSelectorType(selector: string): SelectorType {
   if (!selector) {
      /**
      * The selector type is unknow.
      */
      return SelectorType.UNKNOWN;
   } else if (
      selector.indexOf('.') > -1
      || RocketHas.spaces(selector)
      || RocketRegExTest({check: selector, regEx: RegEx.ATTRIBUTE})
   ) {
      /**
       * The selector is of type query selector all.
       */
      return SelectorType.QUERY_SELECTOR_ALL;
   } else if (selector.indexOf('#') > -1) {
      /**
       * The selector is of type id.
       */
      return SelectorType.GET_ELEMENT_BY_ID;
   } else if (RocketRegExTest({check: selector, regEx: RegEx.TAG})) {
      /**
       * The selector is of type tag name.
       */
      return SelectorType.GET_ELEMENT_BY_TAG;
   } else {
      /**
       * The selector type is unknow.
       */
      return SelectorType.UNKNOWN;
   }
}

/**
 * Export.
 */
export const RocketGet = {
   extension: getExtension,
   index: getIndex,
   selectorType: getSelectorType
};
