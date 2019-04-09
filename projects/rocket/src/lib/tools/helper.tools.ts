/**
 * @author Chris Humboldt
 */

import { rocketIs } from './is.tool';

export const rocketHelper = {
   parse: {
      /**
       * Parse JSON and return a usable object.
       */
      json: (json: any): any => {
         if (rocketIs.json(json)) {
            return JSON.parse(json);
         } else {
            return json;
         }
      }
   }
}
