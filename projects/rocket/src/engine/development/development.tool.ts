/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is';

/**
 * Log out a message to the console.
 *
 * @param message
 */
export function RocketLog(message: any): void {
   if ((RocketIs.browser() && (!window || !window.console))) {
      return;
   } else {
      console.log(message);
   }
}

/**
 * Log out an error message to the console.
 *
 * @param message
 */
export function RocketError(message: any): void {
   if ((RocketIs.browser() && (!window || !window.console)) || !RocketIs.browser()) {
      return;
   } else {
      throw new Error(message);
   }
}

/**
 * Log out a warning message to the console.
 *
 * @param message
 */
export function RocketWarning(message: any): void {
   if ((RocketIs.browser() && (!window || !window.console))) {
      return;
   } else {
      console.warn(message);
   }
}
