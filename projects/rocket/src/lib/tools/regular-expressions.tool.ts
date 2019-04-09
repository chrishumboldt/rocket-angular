/**
 * @author Chris Humboldt
 */

/**
 * Regular expression test.
 */
export function regExTest(check: string, regExTest: RegExp): boolean {
   return regExTest.test(check);
}
