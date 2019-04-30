/**
 * @author Chris Humboldt
 */

import { StorageType } from '../stores';
import { ValueGenerator } from '../value-generator';

export class StorageConfig {
   name: string;
   type: StorageType

   constructor(input: any = {}) {
      this.name = ValueGenerator(this, input, 'name', 'RocketStorage');
      this.type = ValueGenerator(this, input, 'type', StorageType.SESSION);
   }
}
