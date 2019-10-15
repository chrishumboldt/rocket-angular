/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { RocketArray, RocketIs, RocketLog, RocketSort } from '../../tool';

import { AddDataOptions, SortDataOptions, UpdateDataOptions } from './data.interface';

@Injectable({
   providedIn: 'root'
})
export class RocketDataService {
   /**
    * This map stores all the data created via this service. This acts as an in
    * memory persistence and gives an abstracted later of control. The motivation
    * for this service is to keep all the data in one singleton instance as opposed
    * to storing data accross multiple files. It helps keep the application clean.
    */
   private dataStore = new Map<string, any>();
   /**
    * Keep a record of all observables stored in the data store.
    */
   private dataIsObservable: string[] = [];
   /**
    * The reserved data keys is a list of data keys reserved for Rocket use. This
    * includes active states for things like menus and loaders.
    */
   private reservedDataKeys: string[] = [
      'data',
      'loader',
      'loaders',
      'menu',
      'menus',
      'storage'
   ];

   /**
    * Create a new entry in the data store.
    *
    * @param options - The deconstructed options object.
    * @param options.name - The key name of the data in the data store map.
    * @param options.asObservable - Determine if the data is going to be an observable.
    * @param options.data - The new updated data.
    * @param options.sortBy - Sort the data by a property.
    * @param options.sortOrder - The order to sort the data.
    */
   public create({
      asObservable = true,
      data,
      name,
      sortBy,
      sortOrder = 'asc'
   }: AddDataOptions): void {
      /**
       * Make sure a date entry isn't being created that uses a reserved data key.
       */
      if (this.isReserved(name)) {
         RocketLog(`ROCKET DATA CREATE: The data key name "${name}" that you submitted is reserved and therefore invalid. Please use a different name.`);
         return;
      }
      if (this.exists(name)) {
         RocketLog(`ROCKET DATA CREATE: The data key name "${name}" that you submitted already exists. Rather use the update method to update the existing data.`);
         return;
      }

      const sortedData = this.sortData({data, sortBy, sortOrder});
      /**
       * If the data is being stored as an observable we now need to create two
       * reference, once for the BehaviorSubject and one for the observable instance.
       */
      if (asObservable) {
         this.dataIsObservable.push(name);
         this.dataStore.set(name, new BehaviorSubject(sortedData));
         this.dataStore.set(`${name}$`, this.dataStore.get(name).asObservable());
      } else {
         this.dataStore.set(name, sortedData);
      }
   }

   /**
    * Detroy data within the data storage. This will remove the entire map entry
    * as well any data related to observable streams. This is not really
    * used that often.
    *
    * @param name - The key name of the data in the data store map.
    */
   public destroy(name: string): void {
      /**
       * Start by deleting the observable data.
       */
      if (this.isObservable(name)) {
         this.dataStore.delete(`${name}$`);
         RocketArray.remove(this.dataIsObservable, {value: name});
      }
      /**
       * Now remove the actual data entry.
       */
      this.dataStore.delete(name);
   }

   /**
    * Check to see if the data entry exists.
    *
    * @param name - The key name of the data in the data store map.
    */
   public exists(name: string): boolean {
      return this.dataStore.has(name);
   }

   /**
    * Get data from the data store. If the data is a value then simply return the
    * value, but if it is an observable use the getValue() method.
    *
    * @param name - The key name of the data in the data store map.
    */
   public get(name: string): any {
      const theData = this.dataStore.get(name);

      /**
       * Check to see if the data is of type observable.
       */
      return (this.isObservable(name)) ? theData.getValue() : theData;
   }

   /**
    * Get the observable data from the data store.
    *
    * @param name - The key name of the data in the data store map.
    */
   public getObservable(name: string): Observable<any> {
      if (this.isObservable(name)) {
         return this.dataStore.get(name);
      }
   }

   /**
    * Check to see if data within the data store is an observable.
    *
    * @param name - The key name of the data in the data store map.
    */
   public isObservable(name: string): boolean {
      return this.dataIsObservable.includes(name);
   }

   /**
    * Check to see if the desired name is a reserved data key.
    *
    * @param name - The key name of the data in the data store map.
    */
   public isReserved(name: string): boolean {
      return this.reservedDataKeys.includes(name);
   }

   /**
    * Determine how to sort the data being passed into the method of this service.
    *
    * @param options - The deconstructed options object.
    * @param options.data - The data to sort.
    * @param options.sortBy - Sort the data by a property.
    * @param options.sortOrder - The order to sort the data.
    */
   private sortData({data, sortBy, sortOrder = 'asc'}: SortDataOptions): any {
      /**
       * Check to see if sorting is required.
       */
      if (sortBy && sortBy.length > 0) {
         if (RocketIs.array(data)) {
            RocketSort.array(data, {by: sortBy, order: sortOrder});
         } else if (RocketIs.map(data)) {
            RocketSort.map(data, {by: sortBy, order: sortOrder});
         }
      }
      /**
       * Now return the data.
       */
      return data;
   }

   /**
    * Update the data in the data store.
    *
    * @param options - The deconstructed options object.
    * @param options.name - The key name of the data in the data store map.
    * @param options.data - The new updated data.
    * @param options.sortBy - Sort the data by a property.
    * @param options.sortOrder - The order to sort the data.
    */
   public update({
      data,
      name,
      sortBy,
      sortOrder = 'asc'
   }: UpdateDataOptions): void {
      /**
       * Catch.
       */
      if (!this.exists(name)) {
         RocketLog(`ROCKET DATA UPDATE: No data with name "${name}" is available.`);
         return;
      }

      /**
       * Check to see if sorting is required.
       */
      const sortedData = this.sortData({data, sortBy, sortOrder});
      /**
       * Update the data.
       */
      if (this.isObservable(name)) {
         this.dataStore.get(name).next(sortedData);
      } else {
         this.dataStore.set(name, sortedData);
      }
   }
}
