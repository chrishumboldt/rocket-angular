/**
 * @author Chris Humboldt
 */

import { RocketHas } from '../has';
import { RocketRegExTest } from '../regular-expression';
import { RegEx, SelectorType } from '../../store';

/**
 * Get the extension of a string.
 *
 * @param input - The input.
 */
function getExtension(input: string): string {
   return input.split('.').pop().toLowerCase();
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
   if (
      selector.indexOf('.') > -1
      || RocketHas.spaces(selector)
      || RocketRegExTest(selector, RegEx.ATTRIBUTE)
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
   } else if (RocketRegExTest(selector, RegEx.TAG)) {
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
