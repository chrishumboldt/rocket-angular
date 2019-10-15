/**
 * @author Chris Humboldt
 */

export interface AddDataOptions {
   asObservable?: boolean;
   data?: any;
   name: string;
   sortBy?: string;
   sortOrder?: string;
}

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

export interface UpdateDataOptions {
   data: any;
   name: string;
   sortBy?: string;
   sortOrder?: string;
}
