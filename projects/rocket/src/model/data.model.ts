/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator/value.generator';
import { SortOrder } from '../store/sort.store';

export class DataEntry {
   asObservable?: boolean;
   data?: any;
   force?: boolean;
   name: string;
   sortBy?: string;
   sortOrder?: SortOrder;

   constructor(data: any = {}) {
      this.asObservable = ValueGenerator({data: data.asObservable, fallback: true});
      this.data = ValueGenerator({data: data.data});
      this.force = ValueGenerator({data: data.force, fallback: false});
      this.name = ValueGenerator({data: data.name, fallback: ''});
      this.sortOrder = ValueGenerator({
         data: data.sortOrder,
         fallback: SortOrder.ASCENDING
      });

      /**
       * Optionals.
       */
      if (data.sortBy) {
         this.sortBy = ValueGenerator({data: this.sortBy});
      }
   }
}

export interface SortDataOptions {
   data: any;
   sortBy?: string;
   sortOrder?: SortOrder;
}

export class SubscribeToOptions {
   name: any;
   onEmit: any;
   safeEmit?: boolean;

   constructor(data: any = {}) {
      this.name = ValueGenerator({data: data.name, fallback: ''});
      this.onEmit = ValueGenerator({data: data.onEmit, fallback: () => {}});
      this.safeEmit = ValueGenerator({data: data.safeEmit, fallback: true});
   }
}
