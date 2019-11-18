/**
 * @author Chris Humboldt
 */

import { RocketConvert } from './convert.tool';

/**
 * Interfaces.
 */
interface RocketCloneOptions {
   input: any;
   applyClass?: any;
}

/**
 * Clone the value that is input and return a new item without references
 * to the original value.
 *
 * @param options - The deconstructed options object.
 * @param options.applyClass - You can apply a class to the cloned object.
 * @param options.input - The input value that needs to be converted.
 */
export function RocketClone({ applyClass, input }: RocketCloneOptions): any {
   const convertedJSON = RocketConvert.toJSON(JSON.stringify(input));
   return (applyClass) ? new applyClass(convertedJSON) : convertedJSON;
}
