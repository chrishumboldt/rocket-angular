/**
 * @author Chris Humboldt
 */

/**
 * Regular expression test.
 *
 * @param check
 * @param regExTest
 */
export function RocketRegExTest(check: string, regExTest: RegExp): boolean {
   return regExTest.test(check);
}
