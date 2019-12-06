/**
 * @author Chris Humboldt
 */

import { RocketExists } from './exists.tool';

describe('Rocket Exists Tool:', () => {
   // Tests.
   it('Should successfully test for the existence of a value.', () => {
      const nothing = undefined;
      const nonExistent = null;
      const trueMe = true;
      const someValue = 'yay';

      expect(RocketExists(trueMe)).toBeTruthy();
      expect(RocketExists(someValue)).toBeTruthy();
      expect(RocketExists(nothing)).toBeFalsy();
      expect(RocketExists(nonExistent)).toBeFalsy();
      expect(RocketExists(false)).toBeFalsy();
   });
});
