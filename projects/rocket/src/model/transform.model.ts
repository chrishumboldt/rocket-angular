/**
 * @author Chris Humboldt
 */

export interface TransformBytesOptions {
   bytes: number;
   decimals?: number;
};

export interface TransformEnumOptions {
  data: any;
  reverse?: boolean;
  valuesOnly?: boolean;
}
