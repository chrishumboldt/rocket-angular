/**
 * @author Chris Humboldt
 */

import { SortOrder } from '../store/sort.store';

export interface CompareObjectValueParams {
  by: string;
  order?: SortOrder;
}
export interface SortArrayParams {
  data: any[];
  by?: string;
  order?: SortOrder;
}
export interface SortMapParams {
  by?: string;
  data: Map<any, any>;
  order?: SortOrder;
}
