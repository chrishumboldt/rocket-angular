/**
 * @author Chris Humboldt
 */

 import { ValueGenerator } from '../factory';
import { StorageType } from '../store';

export class StorageConfig {
   name: string;
   type: StorageType;

   constructor(input: any = {}) {
      this.name = ValueGenerator(this, input, 'name', 'RocketStorage');
      this.type = ValueGenerator(this, input, 'type', StorageType.SESSION);
   }
}
