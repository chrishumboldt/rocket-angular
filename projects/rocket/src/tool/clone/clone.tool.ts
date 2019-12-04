/**
 * @author Chris Humboldt
 */

import { RocketConvert } from '../convert/convert.tool';
import { CloneOptions } from '../../model/clone.model';

/**
 * Clone the value that is data and return a new item without references
 * to the original value.
 *
 * @param options - The deconstructed options object.
 * @param options.applyClass - You can apply a class to the cloned object.
 * @param options.data - The data value that needs to be converted.
 */
export function RocketClone({ applyClass, data }: CloneOptions): any {
   const convertedJSON = RocketConvert.toJSON(JSON.stringify(data));
   return (applyClass) ? new applyClass(convertedJSON) : convertedJSON;
}
