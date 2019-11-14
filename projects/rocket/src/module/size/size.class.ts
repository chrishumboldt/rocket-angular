/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../../generator/value.generator';

export class Size {
   height: number;
   width: number;

   constructor(input: any = {}) {
      this.height = ValueGenerator(this, input, 'height', 0);
      this.width = ValueGenerator(this, input, 'width', 0);
   }
}

export class SizeClasses {
   height: string;
   width: string;

   constructor(input: any = {}) {
      this.height = ValueGenerator(this, input, 'height', '');
      this.width = ValueGenerator(this, input, 'width', '');
   }
}
