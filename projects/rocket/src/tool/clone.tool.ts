/**
 * @author Chris Humboldt
 */

import { RocketConvert } from './convert.tool';

/**
 * Clone the value that is input and return a new item without references
 * to the original value.
 *
 * @param input - The input value that needs to be converted.
 * @param applyClass - You can apply a class to the cloned object.
 */
export function RocketClone(input: any, applyClass?: any): any {
   const convertedJSON = RocketConvert.toJSON(JSON.stringify(input));
   return (applyClass) ? new applyClass(convertedJSON) : convertedJSON;
}
