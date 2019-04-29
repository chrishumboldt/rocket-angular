/**
 * @author Chris Humboldt
 */

import { Characters } from '../stores';

/**
 * Generate a random integer.
 *
 * @param max
 * @param min
 */
function randomInteger(max = 10, min = 1): number {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random string.
 *
 * @param stringLength
 * @param textOnly
 */
function randomString(stringLength = 5, textOnly = false): string {
   const characters = (textOnly) ? Characters.ALPHABET : `${Characters.ALPHABET}${Characters.NUMBERS}`;
   let returnString = '';

   /**
    * Append to the return string a character randomly selected from the
    * character list.
    */
   for (let i = 0; i < stringLength; i++) {
      returnString += characters[randomInteger(characters.length)];
   }

   return returnString;
}

export const rocketRandom = {
   integer: randomInteger,
   stirng: randomString
};
