/**
 * @author Chris Humboldt
 */

/**
 * @param check - The "thing" to check for.
 */
export function RocketExists(check: any): boolean {
   return !(typeof check === 'undefined' || check === null || check === false);
}
