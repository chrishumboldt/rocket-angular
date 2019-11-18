/**
 * @author Chris Humboldt
 */

/**
 * Interfaces.
 */
interface RocketRegExTestOptions {
   check: string;
   regEx: RegExp;
}

/**
 * Regular expression test.
 *
 * @param options - The deconstructed options object.
 * @param options.check - The string to check for.
 * @param options.regEx - The regular expression to check against.
 */
export function RocketRegExTest({ check, regEx }: RocketRegExTestOptions): boolean {
   return regEx.test(check);
}
