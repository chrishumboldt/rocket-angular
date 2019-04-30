/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RocketIs } from '../is';
import { StorageConfig } from '../storage/storage.class';
import { StorageType } from '../stores';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   /**
    * Web storage.
    */
   public storageDefault = new StorageConfig({
      name: 'RocketStorage',
      type: StorageType.SESSION
   });
   private storage = new BehaviorSubject<StorageConfig>(this.storageDefault);
   public storage$ = this.storage.asObservable();

   /**
    * @param name
    */
   public setStorageName(name: string): void {
      /**
       * Catch.
       */
      if (!RocketIs.string(name) || name.length < 1) {
         return;
      }
      /**
       * Set the new name.
       */
      const storage = this.storage.getValue();
      storage.name = name;
      this.storage.next(storage);
   }

   /**
    * @param type
    */
   public setStorageType(type: StorageType): void {
      /**
       * Catch.
       */
      if (type.length < 1) {
         return;
      }
      /**
       * Set the new type.
       */
      const storage = this.storage.getValue();
      storage.type = type;
      this.storage.next(storage);
   }
}
