/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is/is.tool';

/**
 * Lowercase the whole string.
 *
 * @param data - The string modify.
 */
function lowercaseAll(data: string = ''): string {
  return data.toString().toLowerCase();
}

/**
 * Lowercase the first letter of the string.
 *
 * @param data - The string modify.
 */
function lowercaseFirst(data: string = ''): string {
  const asString = data.toString();
  return `${asString.charAt(0).toLowerCase()}${asString.slice(1)}`;
}

/**
 * Lowercase the last letter of the string.
 *
 * @param data - The string modify.
 */
function lowercaseLast(data: string = ''): string {
  const asString = data.toString();
  return `${asString.slice(0, asString.length - 1)}${asString
    .charAt(asString.length - 1)
    .toLowerCase()}`;
}

/**
 * Remove the first character of a string.
 *
 * @param data - The string modify.
 */
function removeFirst(data: string = ''): string {
  return data.toString().substring(1);
}

/**
 * Remove the first and last characters of a string.
 *
 * @param data - The string modify.
 */
function removeFirstAndLast(data: string = ''): string {
  const asString = data.toString();
  return asString.substring(1, asString.length - 1);
}

/**
 * Remove the last character of a string.
 *
 * @param data - The string modify.
 */
function removeLast(data: string = ''): string {
  const asString = data.toString();
  return asString.substring(0, asString.length - 1);
}

/**
 * Remove all the spaces from a string.
 *
 * @param data - The string modify.
 */
function removeSpaces(data: string = ''): string {
  return data.toString().replace(/ /g, '');
}

/**
 * Uppercase the whole string.
 *
 * @param data - The string modify.
 */
function uppercaseAll(data: string = ''): string {
  return RocketIs.string(data) ? data.toUpperCase() : data;
}

/**
 * Uppercase the first letter of the string.
 *
 * @param data - The string modify.
 */
function uppercaseFirst(data: string = ''): string {
  const asString = data.toString();
  return `${asString.charAt(0).toUpperCase()}${asString.slice(1)}`;
}

/**
 * Uppercase the last letter of the string.
 *
 * @param data - The string modify.
 */
function uppercaseLast(data: string = ''): string {
  const asString = data.toString();
  return `${asString.slice(0, asString.length - 1)}${asString
    .charAt(asString.length - 1)
    .toUpperCase()}`;
}

export const RocketString = {
  remove: {
    first: removeFirst,
    firstAndLast: removeFirstAndLast,
    last: removeLast,
    spaces: removeSpaces
  },
  lowercase: {
    all: lowercaseAll,
    first: lowercaseFirst,
    last: lowercaseLast
  },
  uppercase: {
    all: uppercaseAll,
    first: uppercaseFirst,
    last: uppercaseLast
  }
};
