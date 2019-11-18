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
   data: any[];
   by?: string;
   order?: string;
}
interface SortMapOptions {
   by?: string;
   data: Map<any, any>;
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
 * @param options - The deconstructed options object.
 * @param options.data - The array to sort.
 * @param options.by - The field in the array being sorted.
 * @param options.order - The order of the sort.
 */
function sortArray({ data = [], by, order = 'asc' }: SortArrayOptions): any[] {
   /**
    * Do a few checks on the data first.
    */
   if (RocketIs.array(data) && data.length > 0) {
      /**
       * Determine if we are sorting an array of objects or simply values.
       */
      if (RocketIs.object(data[0])) {
         return data.sort(sortCompareObjectValue({by, order}));
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
 * @param options.data - The map to sort.
 * @param options.order - The order of the sort.
 */
function sortMap({ by, data, order = 'asc' }: SortMapOptions): any {
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
   orderArray = sortArray({data: orderArray, by: 'theProperty', order});
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
