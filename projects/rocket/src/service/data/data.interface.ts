/**
 * @author Chris Humboldt
 */

export interface SortDataOptions {
   data: any;
   sortBy?: string;
   sortOrder?: string;
}

export interface SubscribeToOptions {
   observables: any;
   onEmit: any;
   safeEmit?: boolean;
}
