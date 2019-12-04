/**
 * @author Chris Humboldt
 */

import { RocketRandom } from './random.tool';

describe('Rocket Random Tool:', () => {
   const loopLimit = 50;

   /**
    * Tests.
    */
   it('Should create a random number between and including 1 to 3', () => {
      // Run the test 50 times.
      for (let i = 0, len = loopLimit; i < len; i++) {
         const randomNumber = RocketRandom.integer({max: 3});

         expect(randomNumber).toBeGreaterThan(0);
         expect(randomNumber).toBeLessThan(4);
      }
   });

   it('Should create a random string that on average shouldn\'t repeat.', () => {
      const strings = [];
      const stringLength = 10;
      let stringRepeats = 0;

      // Run the test 50 times.
      for (let i = 0, len = loopLimit; i < len; i++) {
         const randomString = RocketRandom.string({length: stringLength});

         expect(typeof randomString).toEqual('string');
         expect(randomString.length).toEqual(stringLength);

         // Check for repeats
         if (strings.includes(randomString)) {
            stringRepeats++;
         } else {
            // Add it to the strings array to test repeat occurance.
            strings.push(randomString);
         }
      }

      /**
       * If there are repeats within the random generation just console out that
       * result. The possibility of repeats exists so its not a failure but
       * something I hope wont happen often.
       */
      if (stringRepeats > 0) {
         console.log('Random string test repeat count:', stringRepeats);
      }
   });
});
