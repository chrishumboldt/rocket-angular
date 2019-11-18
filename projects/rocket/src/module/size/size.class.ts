/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../../generator/value.generator';

export class Size {
   height: number;
   width: number;

   constructor(input: any = {}) {
      this.height = ValueGenerator({input: input.height, fallback: 0});
      this.width = ValueGenerator({input: input.width, fallback: 0});
   }
}

export class SizeClasses {
   height: string;
   width: string;

   constructor(input: any = {}) {
      this.height = ValueGenerator({input: input.height, fallback: ''});
      this.width = ValueGenerator({input: input.width, fallback: ''});
   }
}
