/**
 * @author Chris Humboldt
 */

import { RocketParse } from './parse.tools';

/**
 * Clone the value that is input and return a new item without references
 * to the original value.
 *
 * @param input
 */
export function RocketClone(input: any): any {
   return RocketParse.json(JSON.stringify(input));
}
