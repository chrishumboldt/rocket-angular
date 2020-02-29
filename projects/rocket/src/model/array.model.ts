/**
 * @author Chris Humboldt
 */

export interface ArrayCleanParams {
  data: any;
  hardClean?: boolean;
}
export interface ArrayMakeParams {
  data: any;
  unique?: boolean;
}
export interface ArrayRemoveParams {
  data: any[];
  index?: number;
  value?: any;
}
