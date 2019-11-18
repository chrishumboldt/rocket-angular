/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';
import { RocketString } from './string.tool';

/**
 * Interfaces.
 */
interface CompareObjectValueOptions {
   by: string;
   order?: string
}
interface SortArrayOptions {
   input: any[];
   by?: string;
   order?: string;
}
interface SortMapOptions {
   by?: string;
   input: Map<any, any>;
   order?: string;
}

/**
 * Transform the string into a natural sorting value. This includes removing case
 * and padding all numbers with a zero base.
 *
 * @param input - The value to make sortable.
 */
function makeSortableString(input: any): string {
   return RocketString.lowercase.all(input)
      .replace(/\d+/g, (digit: any) => digit.padStart(10, '0'));
}

/**
 * Sort and array of objects in an ascending order.
 *
 * @param options - The deconstructed options object.
 * @param options.input - The array to sort.
 * @param options.by - The field in the array being sorted.
 * @param options.order - The order of the sort.
 */
function sortArray({ input = [], by, order = 'asc' }: SortArrayOptions): any[] {
   /**
    * Do a few checks on the input first.
    */
   if (RocketIs.array(input) && input.length > 0) {
      /**
       * Determine if we are sorting an array of objects or simply values.
       */
      if (RocketIs.object(input[0])) {
         return input.sort(sortCompareObjectValue({by, order}));
      } else {
         const sortedData = input.sort();
         return (order === 'desc') ? sortedData.reverse() : sortedData;
      }
   } else {
      /**
       * There is nothing to sort so just return the existing data.
       */
      return input;
   }
}

/**
 * The sorting function that will compare the value in an object.
 *
 * @param object The deconstructed arguments object.
 * @param object.by - The key of the object.
 * @param object.order - The order direction.
 */
function sortCompareObjectValue({
   by,
   order = 'asc'
}: CompareObjectValueOptions): any {
   return (a: any, b: any) => {
      /**
       * Catch. Property doesnt exist on either object. Return a no sort value.
       */
      if (!a.hasOwnProperty(by) || !b.hasOwnProperty(by)) {
         return 0;
      }

      /**
       * Make sure the case of the value doesn't affect the outcome.
       */
      const valueA = makeSortableString(a[by]);
      const valueB = makeSortableString(b[by]);

      /**
       * Compare.
       */
      let comparison = 0;
      /**
       * If numbers then sort the numbers else sort the strings.
       */
      if (valueA > valueB) {
         comparison = 1;
      } else if (valueA < valueB) {
         comparison = -1;
      }
      /**
       * Return based on the order.
       */
      return (order === 'asc') ? comparison : (comparison * -1);
   }
}

/**
 * Sort any map by a particular top level property.
 *
 * @param options - The deconstructed options object.
 * @param options.by - The field in the map object being sorted.
 * @param options.input - The map to sort.
 * @param options.order - The order of the sort.
 */
function sortMap({ by, input, order = 'asc' }: SortMapOptions): any {
   const backupMap = new Map(input);
   let orderArray: any[] = [];

   /**
    * Start by clearing the existing map reference.
    */
   input.clear();
   /**
    * Add to the list to order and then sort that list.
    */
   for (const [key, value] of backupMap) {
      orderArray.push({
         key,
         theProperty: (RocketIs.object(value)) ? value[by] : value
      });
   }
   orderArray = sortArray({input: orderArray, by: 'theProperty', order});
   /**
    * Use the ordered list to repopulate the original data map.
    */
   orderArray.forEach((item: any) => {
      input.set(item.key, backupMap.get(item.key));
   });
   /**
    * Return the reordered data map.
    */
   return input;
}

/**
 * Exports.
 */
export const RocketSort = {
   array: sortArray,
   map: sortMap
};
