/**
 * @author Chris Humboldt
 */

import { rocketIs } from './is.tool';

/**
 * Log out a message to the console.
 */
export function rocketLog(message: string): void {
   if ((rocketIs.browser() && (!window || !window.console))) {
      return;
   } else {
      console.log(message);
   }
}

/**
 * Log out an error message to the console.
 */
export function rocketError(message: string): void {
   if ((rocketIs.browser() && (!window || !window.console)) || !rocketIs.browser()) {
      return;
   } else {
      throw new Error(message);
   }
}
