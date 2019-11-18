/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../tool/is.tool';

/**
 * Interface.
 */
interface ClassValueOptions {
   applyClass: any;
   applyClassToMap: boolean;
   input: any;
}
interface ValueGeneratorOptions {
   applyClass?: any;
   applyClassToMap?: boolean;
   fallback?: any;
   transform?: any;
   input: any;
}
interface SetValueOptions {
   fallback?: any;
   input: any;
}

/**
 * This serves as a way to handle the assignment of value to class properties in a
 * very generic way.
 *
 * @param options - The deconstructed options object.
 * @param options.applyClass - Apply a class to the determined value.
 * @param options.applyClassToMap - Apply a class to each property of a map.
 * @param options.fallback - Should no input be determined than a fallback value is used.
 * @param options.transform - Call a custom transform function on the data.
 * @param options.input - The actual input data passed in through the class constructor.
 */
export function ValueGenerator({
   applyClass,
   applyClassToMap,
   fallback,
   transform,
   input
}: ValueGeneratorOptions): any {
   let theValue = setValue({input, fallback});

   if (RocketIs.function(transform)) {
      theValue = transform(theValue).bind(this);
   } else if (applyClass) {
      theValue = classValue({input: theValue, applyClass, applyClassToMap});
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
 * @param options.input - The value being used.
 */
function classValue({
   applyClass,
   applyClassToMap = false,
   input
}: ClassValueOptions): any {
   /**
    * The input and class instance match, so we are happy.
    */
   if (!(input instanceof applyClass)) {
      if (RocketIs.array(input)) {
         /**
          * Determined that this is an array.
          */
         input = input.map((item: any) => {
            return new applyClass(item);
         });
      } else if (RocketIs.object(input) && applyClassToMap) {
         /**
          * Determined that this is an object.
          */
         Object.keys(input).forEach((key: string) => {
            input[key] = new applyClass(input[key]);
         });
      } else {
         /**
          * Apply directly on the input itself.
          */
         input = new applyClass(input);
      }
   }
   /**
    * Return.
    */
   return input;
}

/**
 * Set the value based on what is being presented from the class.
 *
 * @param options - The deconstructed options object.
 * @param options.fallback - Should no input be determined than a fallback value is used.
 * @param options.input - The actual input value passed in through the class constructor.
 */
function setValue({
   fallback,
   input
}: SetValueOptions): any {
   return (input !== undefined) ? input : fallback;
}
