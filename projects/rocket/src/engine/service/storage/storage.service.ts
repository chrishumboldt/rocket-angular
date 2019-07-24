/**
 * @author Chris Humboldt
 *
 * The storage service wraps all data into one mutable JSON object that then
 * gets stored into local or session storage. This way multiple entries are
 * easily accessible and will not conflict with other storage data generated
 * from other sites / applications.
 */

import { Injectable } from '@angular/core';

import { RocketArray, RocketConvert, RocketIs } from '../../tool';
import { RocketConfigService } from '../config';
import { StorageConfig } from '../../class';
import { StorageType } from '../../store';

@Injectable({
   providedIn: 'root'
})
export class RocketStorageService {
   private storageName: string;
   private storageType: StorageType;

   constructor(
      private rocketConfig: RocketConfigService
   ) {
      this.subToStorageConfigs();
   }

   /**
    * Save an input into the default storage.
    *
    * @param name - The name of the storage.
    * @param value - The value to save into the storage.
    */
   public add(name: any, value?: any): void {
      let storageData = this.getStorageData();

      /**
       * Check the name. If it is an object then replace the entire storage
       * with the object. If it is a string then assume that the name is
       * simply a key and bind the value to it.
       */
      if (RocketIs.string(name)) {
         /**
          * If there is no storage then create a new object.
          */
         if (!storageData) {
            storageData = {};
         }
         storageData[name] = value;
      } else if (RocketIs.object(name)) {
         storageData = name;
      }
      /**
       * Save the newly stored data into session storage by default.
       */
      this.saveStorageData(storageData);
   }

   /**
    * Clear the saved storage. Make sure both local and session storage has
    * been deleted in the event that the storage type has changed within
    * the lifecycle of the service and was not detected.
    *
    * @param exclusions - Names to exlcude.
    */
   public clear(exclusions?: any): void {
      /**
       * Catch
       */
      if (!this.storageName) {
         return;
      }

      const exclusionsList = RocketArray.make(exclusions);

      /**
       * If there are no exclusions then simply delete the web storage
       * altogether, however should there be exclusions, edit the existing
       * storage and persist.
       */
      if (exclusionsList.length > 0) {
         const storageData = this.getStorageData();

         /**
          * Iterate over the storage data keys and delete all that fail to
          * exists in the exclusions collection.
          */
         Object.keys(storageData).forEach((key: string) => {
            if (!exclusionsList.includes(key)) {
               delete storageData[key];
            }
         });
         /**
          * Check to see if there is any data left. If not then simply delete
          * the web storage.
          */
         if (Object.keys(storageData).length > 0) {
            this.saveStorageData(storageData);
         } else {
            this.deleteStorageData();
         }
      } else {
         this.deleteStorageData();
      }
   }

   /**
    * Delete the web storage.
    */
   private deleteStorageData(): void {
      /**
       * Catch
       */
      if (!this.storageName) {
         return;
      }

      localStorage.removeItem(this.storageName);
      sessionStorage.removeItem(this.storageName);
   }

   /**
    * Get a stored property from the web storage.
    *
    * @param name - The name of the storgae value to retrieve.
    */
   public get(name: string): any {
      if (RocketIs.string(name)) {
         return this.getStorageData()[name];
      }
   }

   /**
    * Get the current storage object data.
    */
   private getStorageData(): object {
      let storageData: string;

      /**
       * Check to see if local storage is being used. Will default to session
       * storage always.
       */
      if (this.storageName) {
         if (this.storageType === StorageType.LOCAL) {
            storageData = localStorage.getItem(this.storageName);
         } else {
            storageData = sessionStorage.getItem(this.storageName);
         }
      }
      /**
       * Make sure that storage is found else return an empty object.
       */
      return (storageData) ? RocketConvert.toJSON(storageData) : undefined;
   }

   /**
    * Remove a stored property from the web storage.
    *
    * @param name - The name of the storgae value to remove.
    */
   public remove(name: string): any {
      /**
       * Catch.
       */
      if (!RocketIs.string(name)) {
         return;
      }

      const storageData = this.getStorageData();

      /**
       * Remove the key and update the storage again.
       */
      delete storageData[name];
      this.saveStorageData(storageData);
   }

   /**
    * Persist an object to web storage.
    *
    * @param storageData - The data to write to storage.
    */
   private saveStorageData(storageData: any): void {
      if (this.storageType === StorageType.LOCAL) {
         localStorage.setItem(this.storageName, JSON.stringify(storageData));
      } else {
         sessionStorage.setItem(this.storageName, JSON.stringify(storageData));
      }
   }

   /**
    * Subscribe to the storage configurations and set the local name and
    * type values.
    */
   private subToStorageConfigs(): void {
      this.rocketConfig.storage$
         .subscribe(
            (storageConfig: StorageConfig) => {
               const currentStorageData = this.getStorageData();

               /**
                * Only get data and clean out other data should there be a
                * storage name. This forces the subscription to ignore the
                * first emit of the storage configuration.
                */
               if (currentStorageData) {
                  /**
                   * Lets delete the current storage.
                   */
                  this.deleteStorageData();
               }
               /**
                * Set the storage values in this service.
                */
               this.storageName = storageConfig.name;
               this.storageType = storageConfig.type;
               /**
                * Now create the new storage.
                */
               if (currentStorageData) {
                  this.add(currentStorageData);
               }
            }
         );
   }
}
