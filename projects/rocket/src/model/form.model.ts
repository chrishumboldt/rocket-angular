/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator/value.generator';

export class FormSelectOption {
   body: string;
   value?: string;

   constructor(data: any = {}) {
      this.body = ValueGenerator({data: data.body, fallback: ''});
      this.value = ValueGenerator({data: data.value, fallback: this.body});
   }
}
