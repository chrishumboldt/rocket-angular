/**
 * @author Chris Humboldt
 */

import { SelectorType } from './dom.tool';
import { rocketHas } from './has.tool';
import { RegEx, regExTest } from './regular-expressions.tool';

/**
 * Get the extension of a string.
 *
 * @param {string} string
 */
function getExtension(string: string): string {
   return string.split('.').pop().toLowerCase();
}

/**
 * Get the index of a node within its parent.
 *
 * @param {any} node
 */
function getIndex(node: any): number {
   return [].indexOf.call(node.parentNode.children, node);
}

/**
 * Get the selector type based on a string version of the seleector. Used
 * mainly when using the DOM tools.
 *
 * @param {string} selector
 */
function getSelectorType(selector: string): SelectorType {
   if (
      selector.indexOf('.') > -1
      || rocketHas.spaces(selector)
      || regExTest(selector, RegEx.ATTRIBUTE)
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
   } else if (regExTest(selector, RegEx.TAG)) {
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
export const rocketGet = {
   extension: getExtension,
   index: getIndex,
   selectorType: getSelectorType
};
