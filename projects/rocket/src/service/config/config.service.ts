/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RocketIs } from '../../tool';
import { LoaderConfig, StorageConfig } from '../../class';
import { LoaderSize, LoaderType, StorageType } from '../../store';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   /**
    * Loader config.
    */
   private loader = new LoaderConfig();
   /**
    * Web storage.
    */
   private storageDefault = new StorageConfig({
      name: 'RocketStorage',
      type: StorageType.SESSION
   });
   private storage = new BehaviorSubject<StorageConfig>(this.storageDefault);
   public storage$ = this.storage.asObservable();

   public getLoaderColour(): string {
      return this.loader.colour;
   }

   public getLoaderSize(): LoaderSize {
      return this.loader.size;
   }

   public getLoaderType(): LoaderType {
      return this.loader.type;
   }

   /**
    * @param colour - The loader colour
    */
   public setLoaderColour(colour: string): void {
      this.loader.colour = colour;
   }

   /**
    * @param size - The loader size.
    */
   public setLoaderSize(size: LoaderSize): void {
      this.loader.size = size;
   }

   /**
    * @param type - The loader type.
    */
   public setLoaderType(type: LoaderType): void {
      this.loader.type = type;
   }

   /**
    * @param name - The storage name.
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
    * @param type - The storage type.
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
