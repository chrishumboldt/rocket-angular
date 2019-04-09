/**
 * @author Chris Humboldt
 */

import { rocketArray } from './arrays.tool';
import { rocketClone } from './clone.tool';
import { rocketError, rocketLog } from './development.tool';
import { rocketDimension } from './dimensions.tool';
import { rocketDOM } from './dom.tool';
import { rocketHas } from './has.tool';
import { rocketIs } from './is.tool';
import { rocketString } from './strings.tool';

/**
 * Exported stores.
 */
export * from './colours.tool';
export * from './extensions.tool';
export { RegEx } from './regular-expressions.tool';
export * from './states.tool';
export * from './time.tool';

/**
 * Rocket scoped functions.
 */
export const Rocket = {
   array: rocketArray,
   clone: rocketClone,
   dimension: rocketDimension,
   dom: rocketDOM,
   error: rocketError,
   has: rocketHas,
   is: rocketIs,
   log: rocketLog,
   string: rocketString
};
