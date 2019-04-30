/**
 * @author Chris Humboldt
 *
 * The storage service wraps all data into on mutable JSON object that then
 * gets stored into local or session storage. This way multiple entries are
 * easily accessible and will not conflict with other storage data generated
 * from other sites / applications.
 */

import { Injectable } from '@angular/core';

import { RocketArray } from '../arrays';
import { RocketConvert } from '../convert';
import { RocketConfigService } from '../config';
import { RocketIs } from '../is';
import { StorageConfig } from './storage.class';
import { StorageType } from '../stores';

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
    * @param input
    * @param value
    */
   public add(input: any, value?: any): void {
      let storageData = this.getStorageData();

      /**
       * Check the input. If it is an object then replace the entire storage
       * with the object. If it is a string then assume that the input is
       * simply a key and bind the value to it.
       */
      if (RocketIs.string(input)) {
         storageData[input] = value;
      } else if (RocketIs.object(input)) {
         storageData = input;
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
    * @param exclusions
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
    * @param key
    */
   public get(key: string): any {
      if (RocketIs.string(key)) {
         return this.getStorageData()[key];
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
      return (storageData) ? RocketConvert.toJSON(storageData) : {};
   }

   /**
    * Remove a stored property from the web storage.
    *
    * @param key
    */
   public remove(key: string): any {
      /**
       * Catch.
       */
      if (!RocketIs.string(key)) {
         return;
      }

      const storageData = this.getStorageData();

      /**
       * Remove the key and update the storage again.
       */
      delete storageData[key];
      this.saveStorageData(storageData);
   }

   /**
    * Persist an object to web storage.
    *
    * @param storageData
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
               let currentStorageData: any;

               /**
                * Only get data and clean out other data should there be a
                * storage name. This forces the subscription to ignore the
                * first emit of the storage configuration.
                */
               if (this.storageName) {
                  /**
                   * Since we have a storage name, we can go get the data.
                   */
                  currentStorageData = this.getStorageData();
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
