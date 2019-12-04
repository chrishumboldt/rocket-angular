/**
 * @author Chris Humboldt
 */

import { SelectorType } from '../../store/selector.store';
import { RocketGet } from './get.tool';

describe('Rocket Get Tool:', () => {
   /**
    * Tests.
    */
   it('Should get the extension from a string.', () => {
      expect(RocketGet.extension('filename.jpg')).toEqual('jpg');
   });

   it('Should get the node index of an element within its parent element.', () => {
      const container = document.createElement('ul');
      const listItemOne = document.createElement('li');
      const listItemTwo = document.createElement('li');

      // Build the element tree.
      container.appendChild(listItemOne);
      container.appendChild(listItemTwo);

      // Test it.
      expect(RocketGet.index(listItemOne)).toEqual(0);
      expect(RocketGet.index(listItemTwo)).toEqual(1);
   });

   it('Should get the selector type based on the data.', () => {
      expect(RocketGet.selectorType('.className')).toEqual(SelectorType.QUERY_SELECTOR_ALL);
      expect(RocketGet.selectorType('#idReference')).toEqual(SelectorType.GET_ELEMENT_BY_ID);
      expect(RocketGet.selectorType('textarea')).toEqual(SelectorType.GET_ELEMENT_BY_TAG);
      expect(RocketGet.selectorType('')).toEqual(SelectorType.UNKNOWN);
      expect(RocketGet.selectorType(undefined)).toEqual(SelectorType.UNKNOWN);
   });
});
