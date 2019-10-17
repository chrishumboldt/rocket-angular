/**
 * @author Chris Humboldt
 */

export interface SortDataOptions {
   data: any;
   sortBy?: string;
   sortOrder?: string;
}

export interface SubscribeToOptions {
   name: any;
   onEmit: any;
   safeEmit?: boolean;
}
