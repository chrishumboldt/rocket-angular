/**
 * @author Chris Humboldt
 */

import { Prefix } from './prefix.store';

export enum Size {
   SMALL = 'small',
   MEDIUM = 'medium',
   LARGE = 'large'
}

/**
 * Before export the size classes out we need to generate them.
 */
const sizeClasses = [];
(function() {
   Object.keys(Size).forEach((key: string) => {
      sizeClasses.push(`${Prefix.SIZE}h-${Size[key]}`);
      sizeClasses.push(`${Prefix.SIZE}w-${Size[key]}`);
   });
})();
export const SizeClasses = sizeClasses;
