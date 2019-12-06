/**
 * @author Chris Humboldt
 */

import { RocketId } from './id.tool';

describe('Rocket Id Tool:', () => {
   const id = 'someCoolId';
   let divElm: HTMLElement;

   beforeEach(() => {
      divElm = document.createElement('div');
   });

   // Tests.
   it('Should add the id attribute to an element.', () => {
      /*
       * Starting state should be false.
       * Next add the id attribute.
       * Finally test that the id attribute is accessible.
       */
      expect(divElm.getAttribute('id')).toBeFalsy();

      RocketId.add({element: divElm, id});
      expect(divElm.getAttribute('id')).toEqual(id);
   });

   it('Should remove the id attribute from an element.', () => {
      /*
       * Start this test by adding the id attribute.
       * First test that the id is there.
       * Then remove the id and test.
       */
      RocketId.add({element: divElm, id});
      expect(divElm.getAttribute('id')).toEqual(id);

      RocketId.remove(divElm);
      expect(divElm.getAttribute('id')).toBeFalsy();
   });
});
