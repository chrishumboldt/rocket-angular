/**
 * @author Chris Humboldt
 */

/**
 * Exists check.
 *
 * @param check
 */
export function RocketExists(check: any): boolean {
   return !(typeof check === 'undefined' || check === null || check === false);
};
