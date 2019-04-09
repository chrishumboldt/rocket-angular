/**
 * @author Chris Humboldt
 */

/**
 * Exists check.
 *
 * @param check
 */
export function rocketExists(check: any): boolean {
   return !(typeof check === 'undefined' || check === null || check === false);
};
