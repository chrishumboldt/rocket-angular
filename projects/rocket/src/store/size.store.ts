/**
 * @author Chris Humboldt
 */

import { Prefix } from './prefix.store';

export enum SizeType {
   NONE = 'none',
   SMALL = 'small',
   MEDIUM = 'medium',
   LARGE = 'large'
}

/**
 * Before export the size classes out we need to generate them.
 */
const sizeTypeClasses = [];
(function() {
   Object.keys(SizeType).forEach((key: string) => {
      sizeTypeClasses.push(`${Prefix.SIZE}h-${SizeType[key]}`);
      sizeTypeClasses.push(`${Prefix.SIZE}w-${SizeType[key]}`);
   });
})();
export const SizeTypeClasses = sizeTypeClasses;
