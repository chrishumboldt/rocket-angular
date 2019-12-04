/**
 * @author Chris Humboldt
 */

export interface ArrayCleanOptions {
   data: any,
   hardClean?: boolean
}
export interface ArrayMakeOptions {
   data: any;
   unique?: boolean;
}
export interface ArrayRemoveOptions {
   data: any[];
   index?: number;
   value?: any;
}
