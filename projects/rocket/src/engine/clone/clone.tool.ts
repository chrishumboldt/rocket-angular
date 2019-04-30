/**
 * @author Chris Humboldt
 */

import { RocketConvert } from '../convert';

/**
 * Clone the value that is input and return a new item without references
 * to the original value.
 *
 * @param input
 */
export function RocketClone(input: any): any {
   return RocketConvert.toJSON(JSON.stringify(input));
}
