/**
 * @author Chris Humboldt
 *
 * The storage service wraps all data into on mutable JSON object that then
 * gets stored into local or session storage. This way multiple entries are
 * easily accessible and will not conflict with other storage data generated
 * from other sites / applications.
 */

import { Injectable } from '@angular/core';

import { StorageType } from '../stores';
import { RocketDefaultsService } from './defaults.service';
import { RocketIs, RocketParse } from '../tools';

@Injectable({
   providedIn: 'root'
})
export class RocketStorageService {
   private storageName: string;
   private storageType: StorageType;

   constructor(
      private rocketDefaultsService: RocketDefaultsService
   ) {
      this.subToStorageData();
   }

   /**
    * Save an input into the default storage.
    *
    * @param input
    * @param value
    */
   public add(input: any, value?: any): void {
      let storage = this.getStorage();

      /**
       * Check the input. If it is an object then replace the entire storage
       * with the object. If it is a string then assume that the input is
       * simply a key and bind the value to it.
       */
      if (RocketIs.string(input)) {
         storage[input] = value;
      } else if (RocketIs.object(input)) {
         storage = input;
      }
      /**
       * Save the newly stored data into session storage by default.
       */
      if (this.storageType === StorageType.LOCAL) {
         localStorage.setItem(this.storageName, JSON.stringify(storage));
      } else {
         sessionStorage.setItem(this.storageName, JSON.stringify(storage));
      }
   }

   /**
    * Delete the saved storage. Make sure both local and session storage has
    * been deleted in the event that the storage type has changed within
    * the lifecycle of the service and was not detected.
    */
   private deleteStorage(): void {
      localStorage.removeItem(this.storageName);
      sessionStorage.removeItem(this.storageName);
   }

   /**
    * Get the current storage object.
    */
   private getStorage(): object {
      let storage: string;

      /**
       * Check to see if local storage is being used. Will default to session
       * storage always.
       */
      if (this.storageType === StorageType.LOCAL) {
         storage = localStorage.getItem(this.storageName);
      } else {
         storage = sessionStorage.getItem(this.storageName);
      }
      /**
       * Make sure that storage is found else return an empty object.
       */
      return (storage) ? RocketParse.json(storage) : {};
   }

   /**
    * Subscribe to the storage data and set the local name and type values.
    */
   private subToStorageData(): void {
      /**
       * Subscribe to the storage name stream.
       */
      this.rocketDefaultsService.storageName$.subscribe(
         (name: string) => {
            this.storageName = name;
         }
      );
      /**
       * Subscribe to the storage type stream.
       */
      this.rocketDefaultsService.storageType$.subscribe(
         (type: StorageType) => {
            this.storageType = type;
         }
      );
   }
}
