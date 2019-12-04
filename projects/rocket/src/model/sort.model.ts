/**
 * @author Chris Humboldt
 */

import { SortOrder } from '../store/sort.store';

export interface CompareObjectValueOptions {
   by: string;
   order?: SortOrder;
}
export interface SortArrayOptions {
   data: any[];
   by?: string;
   order?: SortOrder;
}
export interface SortMapOptions {
   by?: string;
   data: Map<any, any>;
   order?: SortOrder;
}
