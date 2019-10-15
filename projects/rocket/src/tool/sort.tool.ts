/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';
import { RocketString } from './string.tool';

interface CompareObjectValueOptions {
   order?: string
}
interface SortOptions {
   by?: string;
   order?: string;
}

/**
 * Transform the string into a natural sorting value. This includes removing case
 * and padding all numbers with a zero base.
 *
 * @param value - The value to make sortable.
 */
function makeSortableString(value: any): string {
   return RocketString.lowercase.all(value)
      .replace(/\d+/g, (digit: any) => digit.padStart(10, '0'));
}

/**
 * Sort and array of objects in an ascending order.
 *
 * @param data - The data array being sorted.
 * @param object - The deconstructed arguments object.
 * @param object.by - The field in the array being sorted.
 * @param object.order - The order of the sort.
 */
function sortArray(data: any[], {by, order = 'asc'}: SortOptions = {}): any[] {
   /**
    * Do a few checks on the data first.
    */
   if (RocketIs.array(data) && data.length > 0) {
      /**
       * Determine if we are sorting an array of objects or simply values.
       */
      if (RocketIs.object(data[0])) {
         return data.sort(sortCompareObjectValue(by, {order}));
      } else {
         const sortedData = data.sort();
         return (order === 'desc') ? sortedData.reverse() : sortedData;
      }
   } else {
      /**
       * There is nothing to sort so just return the existing data.
       */
      return data;
   }
}

/**
 * The sorting function that will compare the value in an object.
 *
 * @param object The deconstructed arguments object.
 * @param object.key - The key of the object.
 * @param object.order - The order direction.
 */
function sortCompareObjectValue(
   key: string,
   {order = 'asc'}: CompareObjectValueOptions = {}
): any {
   return (a: any, b: any) => {
      /**
       * Catch. Property doesnt exist on either object. Return a no sort value.
       */
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
         return 0;
      }

      /**
       * Make sure the case of the value doesn't affect the outcome.
       */
      const valueA = makeSortableString(a[key]);
      const valueB = makeSortableString(b[key]);

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
 * @param data - The data map being sorted.
 * @param object - The deconstructed arguments object.
 * @param object.by - The field in the map object being sorted.
 * @param object.order - The order of the sort.
 */
function sortMap(data: Map<any, any>, {by, order = 'asc'}: SortOptions = {}): any {
   const backupMap = new Map(data);
   let orderArray: any[] = [];

   /**
    * Start by clearing the existing map reference.
    */
   data.clear();
   /**
    * Add to the list to order and then sort that list.
    */
   for (const [key, value] of backupMap) {
      orderArray.push({
         key,
         theProperty: (RocketIs.object(value)) ? value[by] : value
      });
   }
   orderArray = sortArray(orderArray, {by: 'theProperty', order});
   /**
    * Use the ordered list to repopulate the original data map.
    */
   orderArray.forEach((item: any) => {
      data.set(item.key, backupMap.get(item.key));
   });
   /**
    * Return the reordered data map.
    */
   return data;
}

/**
 * Exports.
 */
export const RocketSort = {
   array: sortArray,
   map: sortMap
};
