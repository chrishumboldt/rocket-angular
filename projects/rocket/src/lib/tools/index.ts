/**
 * @author Chris Humboldt
 */

import { rocketArray } from './arrays.tool';
import { rocketClone } from './clone.tool';
import { rocketError, rocketLog, rocketWarning } from './development.tool';
import { rocketDimension } from './dimensions.tool';
import { rocketDOM } from './dom.tool';
import { rocketExists } from './exists.tool';
import { rocketHas } from './has.tool';
import { rocketIs } from './is.tool';
import { rocketString } from './strings.tool';

/**
 * Rocket scoped functions.
 */
export const Rocket = {
   array: rocketArray,
   clone: rocketClone,
   dimension: rocketDimension,
   dom: rocketDOM,
   error: rocketError,
   exists: rocketExists,
   has: rocketHas,
   is: rocketIs,
   log: rocketLog,
   string: rocketString,
   warning: rocketWarning
};
