/**
 * @author Chris Humboldt
 */

import { RegExTestParams } from '../../model/reg-ex.model';

/**
 * Regular expression test.
 *
 * @param params - The deconstructed options object.
 * @param params.check - The string to check for.
 * @param params.regEx - The regular expression to check against.
 */
export function RocketRegExTest({ check, regEx }: RegExTestParams): boolean {
  return regEx.test(check);
}
