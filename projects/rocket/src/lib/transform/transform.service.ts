/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';

import { Rocket } from '../tools';

@Injectable({
   providedIn: 'root'
})
export class RocketTransformService {
   /**
    * Transform an enum into an array of objects.
    *
    * @param {any} theEnum - The passed in enum.
    * @param {boolean} reverse - Reverse the key value mapping of the returned object.
    */
   public enumToArray(theEnum: any, reverse: boolean = true): any[] {
      return Object.keys(theEnum).map((key: string) => {
         return {
            value: (reverse) ? theEnum[key] : key,
            body: (reverse) ? this.enumKeyToPhrase(key) : theEnum[key]
         };
      });
   }

   /**
    * Transform an enum into a map.
    *
    * @param {any} theEnum - The passed in enum.
    * @param {boolean} reverse - Reverse the key value mapping of the returned object.
    */
   public enumToMap(theEnum: any, reverse: boolean = true): any {
      const theMap = {};

      Object.keys(theEnum).forEach((key: string) => {
         if (reverse) {
            theMap[theEnum[key]] = this.enumKeyToPhrase(key);
         } else {
            theMap[key] = theEnum[key];
         }
      });

      return theMap;
   }

   /**
    * Transform an enum key to a string phrase.
    *
    * @param {string} enumKey - The passed in enum key.
    */
   private enumKeyToPhrase(enumKey: string): string {
      return enumKey
         .split('_')
         .map((splitItem: string) => {
            if (splitItem.length < 3) {
               return Rocket.string.uppercase.all(splitItem);
            } else {
               return splitItem;
            }
         })
         .join(' ');
   }
}
