/**
 * @author Chris Humboldt
 */

/**
 * Regular expression test.
 *
 * @param check - The string to check for.
 * @param regExTest - The regular expression to check against.
 */
export function RocketRegExTest(check: string, regExTest: RegExp): boolean {
   return regExTest.test(check);
}
