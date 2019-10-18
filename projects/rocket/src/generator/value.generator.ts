/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../tool/is.tool';

/**
 * The primary purpose of this function is to determine what type of value to generate.
 * Should the value be the scoped value (i.e. the class property value), should it be
 * a new value passed in via the constructor and should the value have a class applied.
 * Lastly do we need to execute a function on the value that can be executed from the
 * class constructor.
 *
 * This serve as a way to handle the assignment of value to class properties in a
 * very generic way.
 *
 * @param scope - The scope of the class instance.
 * @param input - The actual input data passed in through the class constructor.
 * @param property - The name of the class property.
 * @param fallbackValue - Should no value be determined than a fallback value is used.
 * @param classApply - Apply a class to the determined value.
 * @param functionCall - Call a custom function on the data.
 * @param applyClassToMap - Apply a class to each property of a map.
 */
export function ValueGenerator(
   scope: any,
   input: any,
   property: string,
   fallbackValue?: any,
   classApply?: any,
   functionCall?: any,
   applyClassToMap: boolean = false
) {
   /**
    * Catch stuff here. We NEED scope and attribute.
    */
   if (!scope || !property) {
      return '';
   }

   const valueToSet = setTheValue(scope, input, property, fallbackValue);

   /**
    * Check to see if we are appling a class instance to the value.
    */
   if (RocketIs.function(functionCall)) {
      return functionCall({scope, input, valueToSet});
   } else if (classApply) {
      return classTheValue(valueToSet, classApply, applyClassToMap);
   } else {
      return valueToSet;
   }
}

/**
 * Apply a class the value but first determine if the value is a collection or a
 * string / integer.
 *
 * @param valueToSet - The set value to apply the class to.
 * @param classApply - Apply a class to the set value.
 * @param applyClassToMap - Apply a class to each property of a map.
 */
function classTheValue(
   valueToSet: any,
   classApply: any,
   applyClassToMap: boolean = false
): any {
   /**
    * The value and class instance match, so we are happy.
    */
   if (!(valueToSet instanceof classApply)) {
      if (RocketIs.array(valueToSet)) {
         /**
          * Determined that this is an array.
          */
         valueToSet = valueToSet.map((item: any) => {
            return new classApply(item);
         });
      } else if (RocketIs.object(valueToSet) && applyClassToMap) {
         /**
          * Determined that this is an object.
          */
         Object.keys(valueToSet).forEach((key: string) => {
            valueToSet[key] = new classApply(valueToSet[key]);
         });
      } else {
         /**
          * Apply directly on the value itself.
          */
         valueToSet = new classApply(valueToSet);
      }
   }
   /**
    * Return.
    */
   return valueToSet;
}

/**
 * Set the value based on what is being presented from the class.
 *
 * @param scope - The scope of the class instance.
 * @param input - The actual input data passed in through the class constructor.
 * @param property - The name of the class property.
 * @param fallbackValue - Should no value be determined than a fallback value is used.
 */
function setTheValue(
   scope: any,
   input: any,
   property: any,
   fallbackValue: any
): string {
   /**
    * Set the values from the class scope and the input data.
    */
   const currentValue = scope[property];
   const desiredValue = (input) ? input[property] : undefined;
   /**
    * Return.
    */
   if (desiredValue !== undefined) {
      return desiredValue;
   } else if (currentValue !== undefined) {
      return currentValue;
   } else if (fallbackValue !== undefined) {
      return fallbackValue;
   }
}
