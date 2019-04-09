/**
 * @author Chris Humboldt
 */

import { rocketIs } from './is.tool';

/**
 * Log out a message to the console.
 */
export function rocketLog(message: any): void {
   if ((rocketIs.browser() && (!window || !window.console))) {
      return;
   } else {
      console.log(message);
   }
}

/**
 * Log out an error message to the console.
 */
export function rocketError(message: any): void {
   if ((rocketIs.browser() && (!window || !window.console)) || !rocketIs.browser()) {
      return;
   } else {
      throw new Error(message);
   }
}

/**
 * Log out a warning message to the console.
 */
export function rocketWarning(message: any): void {
   if ((rocketIs.browser() && (!window || !window.console))) {
      return;
   } else {
      console.warn(message);
   }
}
