/**
 * @author Chris Humboldt
 */

export interface TransformBytesParams {
  bytes: number;
  decimals?: number;
}

export interface TransformEnumParams {
  data: any;
  reverse?: boolean;
  valuesOnly?: boolean;
}
