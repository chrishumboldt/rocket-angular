/**
 * @author Chris Humboldt
 */

import {
  RandomIntegerParams,
  RandomStringParams
} from '../../model/random.model';
import { Characters } from '../../store/character.store';

/**
 * Generate a random integer.
 *
 * @param params - The deconstructed options object.
 * @param params.max - The max length of the returned string.
 * @param params.min - The min length of the returned string.
 */
function randomInteger({ max = 10, min = 1 }: RandomIntegerParams): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random string.
 *
 * @param params - The deconstructed options object.
 * @param params.length - The desired string length.
 * @param params.textOnly - Flag to make text only.
 */
function randomString({
  length = 5,
  textOnly = false
}: RandomStringParams): string {
  const characters = textOnly
    ? Characters.ALPHABET
    : `${Characters.ALPHABET}${Characters.NUMBERS}`;
  let returnString = '';

  /*
   * Append to the return string a character randomly selected from the
   * character list.
   */
  for (let i = 0; i < length; i++) {
    returnString += characters[randomInteger({ max: characters.length - 1 })];
  }

  return returnString;
}

export const RocketRandom = {
  integer: randomInteger,
  string: randomString
};
