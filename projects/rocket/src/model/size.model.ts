/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator/value.generator';

export class Size {
  height: number;
  width: number;

  constructor(data: any = {}) {
    this.height = ValueGenerator({ data: data.height, fallback: 0 });
    this.width = ValueGenerator({ data: data.width, fallback: 0 });
  }
}

export class SizeClasses {
  height: string;
  width: string;

  constructor(data: any = {}) {
    this.height = ValueGenerator({ data: data.height, fallback: '' });
    this.width = ValueGenerator({ data: data.width, fallback: '' });
  }
}

export interface SizeWidthOrHeightParams {
  element: any;
  type: string;
}
