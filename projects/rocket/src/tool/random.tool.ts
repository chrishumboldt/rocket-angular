/**
 * @author Chris Humboldt
 */

import { Characters } from '../store';

/**
 * Generate a random integer.
 *
 * @param max - The max length of the returned string.
 * @param min - The min length of the returned string.
 */
function randomInteger(max = 10, min = 1): number {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random string.
 *
 * @param stringLength - The desired string length.
 * @param textOnly - Flag to make text only.
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

export const RocketRandom = {
   integer: randomInteger,
   stirng: randomString
};
