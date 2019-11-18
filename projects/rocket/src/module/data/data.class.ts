/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../../generator/value.generator';

export class DataEntry {
   asObservable?: boolean;
   data?: any;
   force?: boolean;
   name: string;
   sortBy?: string;
   sortOrder?: string;

   constructor(input: any = {}) {
      this.asObservable = ValueGenerator({input: input.asObservable, fallback: true});
      this.data = ValueGenerator({input: input.data});
      this.force = ValueGenerator({input: input.force, fallback: false});
      this.name = ValueGenerator({input: input.name, fallback: ''});
      this.sortOrder = ValueGenerator({input: input.sortOrder, fallback: 'asc'});

      /**
       * Optionals.
       */
      if (input.sortBy) {
         this.sortBy = ValueGenerator({input: this.sortBy});
      }
   }
}

export class SubscribeToOptions {
   name: any;
   onEmit: any;
   safeEmit?: boolean;

   constructor(input: any = {}) {
      this.name = ValueGenerator({input: input.name, fallback: ''});
      this.onEmit = ValueGenerator({input: input.onEmit, fallback: () => {}});
      this.safeEmit = ValueGenerator({input: input.safeEmit, fallback: true});
   }
}
