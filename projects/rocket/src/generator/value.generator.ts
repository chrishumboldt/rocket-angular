/**
 * @author Chris Humboldt
 */

import {
   ClassValueOptions,
   ValueGeneratorOptions,
   SetValueOptions
} from '../model/value.model';
import { RocketIs } from '../tool/is/is.tool';

/**
 * This serves as a way to handle the assignment of a value in a very generic way.
 *
 * @param options - The deconstructed options object.
 * @param options.applyClass - Apply a class to the determined value.
 * @param options.applyClassToMap - Apply a class to each property of a map.
 * @param options.fallback - Should no data be determined than a fallback value is used.
 * @param options.transform - Call a custom transform function on the data.
 * @param options.data - The actual data data passed in through the class constructor.
 */
export function ValueGenerator({
   applyClass,
   applyClassToMap,
   data,
   fallback,
   transform
}: ValueGeneratorOptions): any {
   let theValue = setValue({data, fallback});

   if (RocketIs.function(transform)) {
      theValue = transform(theValue);
   } else if (applyClass) {
      theValue = classValue({data: theValue, applyClass, applyClassToMap});
   }

   return theValue;
}

/**
 * Apply a class the value but first determine if the value is a collection or a
 * string / integer.
 *
 * @param options - The deconstructed options object.
 * @param options.applyClass - Apply a class to the determined value.
 * @param options.applyClassToMap - Apply a class to each property of a map.
 * @param options.data - The value being used.
 */
function classValue({
   applyClass,
   applyClassToMap = false,
   data
}: ClassValueOptions): any {
   // The data and class instance match, so we are happy.
   if (!(data instanceof applyClass)) {
      if (RocketIs.array(data)) {
         // Determined to be an array.
         data = data.map((item: any) => {
            return new applyClass(item);
         });
      } else if (RocketIs.object(data) && applyClassToMap) {
         // Determined to be an object.
         Object.keys(data).forEach((key: string) => {
            data[key] = new applyClass(data[key]);
         });
      } else {
         // Apply directly on the data itself.
         data = new applyClass(data);
      }
   }

   return data;
}

/**
 * Set the value based on what is being presented from the class.
 *
 * @param options - The deconstructed options object.
 * @param options.fallback - Should no data be determined than a fallback value is used.
 * @param options.data - The actual data value passed in through the class constructor.
 */
function setValue({
   fallback,
   data
}: SetValueOptions): any {
   return (data !== undefined) ? data : fallback;
}
