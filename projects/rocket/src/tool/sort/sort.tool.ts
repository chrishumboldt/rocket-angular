/**
 * @author Chris Humboldt
 */

import { RocketIs } from '../is/is.tool';
import {
  CompareObjectValueParams,
  SortArrayParams,
  SortMapParams
} from '../../model/sort.model';
import { RocketString } from '../string/string.tool';
import { SortOrder } from '../../store/sort.store';

/**
 * Transform the string into a natural sorting value. This includes removing case
 * and padding all numbers with a zero base.
 *
 * @param data - The value to make sortable.
 */
function makeSortableString(data: any): string {
  return RocketString.lowercase
    .all(data)
    .replace(/\d+/g, (digit: any) => digit.padStart(10, '0'));
}

/**
 * Sort and array of objects in an ascending order.
 *
 * @param params - The deconstructed options object.
 * @param params.data - The array to sort.
 * @param params.by - The field in the array being sorted.
 * @param params.order - The order of the sort.
 */
function sortArray({
  data = [],
  by,
  order = SortOrder.ASCENDING
}: SortArrayParams): any[] {
  // Do a few checks on the data first.
  if (RocketIs.array(data) && data.length > 0) {
    // Determine if we are sorting an array of objects or simply values.
    if (RocketIs.object(data[0])) {
      return data.sort(sortCompareObjectValue({ by, order }));
    } else {
      const sortedData = data.sort();
      return order === SortOrder.DESCENDING ? sortedData.reverse() : sortedData;
    }
  } else {
    // There is nothing to sort so just return the existing data.
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
  order = SortOrder.ASCENDING
}: CompareObjectValueParams): any {
  return (a: any, b: any) => {
    // Catch. Property doesnt exist on either object. Return a no sort value.
    if (!a.hasOwnProperty(by) || !b.hasOwnProperty(by)) {
      return 0;
    }

    // Make sure the case of the value doesn't affect the outcome.
    const valueA = makeSortableString(a[by]);
    const valueB = makeSortableString(b[by]);
    let comparison = 0;

    // If numbers then sort the numbers else sort the strings.
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    // Return based on the order.
    return order === SortOrder.ASCENDING ? comparison : comparison * -1;
  };
}

/**
 * Sort any map by a particular top level property.
 *
 * @param params - The deconstructed options object.
 * @param params.by - The field in the map object being sorted.
 * @param params.data - The map to sort.
 * @param params.order - The order of the sort.
 */
function sortMap({
  by,
  data,
  order = SortOrder.ASCENDING
}: SortMapParams): any {
  const backupMap = new Map(data);
  let orderArray: any[] = [];

  // Start by clearing the existing map reference.
  data.clear();

  // Add to the list to order and then sort that list.
  for (const [key, value] of backupMap) {
    orderArray.push({
      key,
      theProperty: RocketIs.object(value) ? value[by] : value
    });
  }
  orderArray = sortArray({ data: orderArray, by: 'theProperty', order });
  // Use the ordered list to repopulate the original data map.
  orderArray.forEach((item: any) => {
    data.set(item.key, backupMap.get(item.key));
  });

  // Return the reordered data map.
  return data;
}

export const RocketSort = {
  array: sortArray,
  map: sortMap
};
