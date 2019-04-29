/**
 * @author Chris Humboldt
 */

import { RocketIs } from './is.tool';

/**
 * Parse JSON and return a usable object.
 *
 * @param json
 */
function parseJSON(json: any): any {
   if (RocketIs.json(json)) {
      return JSON.parse(json);
   } else {
      return json;
   }
}

/**
 * Exports.
 */
export const RocketParse = {
   json: parseJSON
}
