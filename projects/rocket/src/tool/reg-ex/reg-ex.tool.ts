/**
 * @author Chris Humboldt
 */

import { RegExTestOptions } from '../../model/reg-ex.model';

/**
 * Regular expression test.
 *
 * @param options - The deconstructed options object.
 * @param options.check - The string to check for.
 * @param options.regEx - The regular expression to check against.
 */
export function RocketRegExTest({ check, regEx }: RegExTestOptions): boolean {
   return regEx.test(check);
}
