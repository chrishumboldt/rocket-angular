/**
 * @author Chris Humboldt
 */

import { StorageType } from '../store';
import { ValueGenerator } from '../factory/value-generator';

export class StorageConfig {
   name: string;
   type: StorageType;

   constructor(input: any = {}) {
      this.name = ValueGenerator(this, input, 'name', 'RocketStorage');
      this.type = ValueGenerator(this, input, 'type', StorageType.SESSION);
   }
}
