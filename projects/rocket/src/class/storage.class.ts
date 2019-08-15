/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator';
import { StorageType } from '../store';

export class StorageConfig {
   name: string;
   type: StorageType;

   /**
    * @param input - The arguments object.
    */
   constructor(input: any = {}) {
      this.name = ValueGenerator(this, input, 'name', 'RocketStorage');
      this.type = ValueGenerator(this, input, 'type', StorageType.SESSION);
   }
}
