/**
 * @author Chris Humboldt
 */

import { RocketTransform } from '../tool/transform/transform.tool';

export enum LoaderSize {
   DEFAULT = 'default',
   LARGE = 'large',
   SMALL = 'small'
}

export const LoaderSizeArray = RocketTransform.enumToArray({
   data: LoaderSize,
   valuesOnly: true
});

export enum LoaderType {
   DOTS = 'dots',
   PULSE = 'pulse',
   SPINNER = 'spinner'
}
