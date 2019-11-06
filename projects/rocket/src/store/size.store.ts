/**
 * @author Chris Humboldt
 */

import { Prefix } from './prefix.store';

export enum SizeText {
   SMALL = 'small',
   MEDIUM = 'medium',
   LARGE = 'large'
}

/**
 * Before export the size classes out we need to generate them.
 */
const sizeTextClasses = [];
(function() {
   Object.keys(SizeText).forEach((key: string) => {
      sizeTextClasses.push(`${Prefix.SIZE}h-${SizeText[key]}`);
      sizeTextClasses.push(`${Prefix.SIZE}w-${SizeText[key]}`);
   });
})();
export const SizeTextClasses = sizeTextClasses;
