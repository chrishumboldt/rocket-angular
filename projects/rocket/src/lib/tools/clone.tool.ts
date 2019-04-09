/**
 * @author Chris Humboldt
 */

import { rocketHelper } from './helper.tools';

/**
 * Clone the value that is input and return a new item without references
 * to the original value.
 */
export function rocketClone(input: any): any {
   return rocketHelper.parse.json(JSON.stringify(input));
}
