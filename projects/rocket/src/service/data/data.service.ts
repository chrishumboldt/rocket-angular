/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { DataEntry, SortDataOptions, SubscribeToOptions } from '../../model/data.model';
import { Pane } from '../../model/pane.model';
import { DataName, RocketData } from '../../store/data.store';
import { SortOrder } from '../../store/sort.store';
import { RocketArray } from '../../tool/array/array.tool';
import { RocketIs } from '../../tool/is/is.tool';
import { RocketSort } from '../../tool/sort/sort.tool';
import { RocketConfigService } from '../config/config.service';

@Injectable({
   providedIn: 'root'
})
export class RocketDataService {
   /*
    * This map stores all the data created via this service. This acts as an in
    * memory persistence and gives an abstracted later of control. The motivation
    * for this service is to keep all the data in one singleton instance as opposed
    * to storing data accross multiple files. It helps keep the application clean.
    */
   public dataStore = new Map<string, any>();
   // Keep a record of all observables stored in the data store.
   private dataIsObservable: string[] = [];
   /*
    * The reserved data keys is a list of data keys reserved for Rocket use. This
    * includes active states for things like menus and loaders.
    */
   private reservedDataKeys: string[] = [
      'data',
      DataName.DOCUMENT_CLICK,
      DataName.LOADERS,
      DataName.MENUS,
      DataName.PANES,
      'storage',
      DataName.WINDOW_SIZE,
      DataName.WINDOW_SIZE_VALUE
   ];

   constructor(
      private rocketConfig: RocketConfigService
   ) {
      this.initializeData();
   }

   /**
    * Clear the data store as needed. USE CAREFULLY!
    */
   public clear(): void {
      this.dataStore = new Map();
      this.dataIsObservable = [];
   }

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
      force = false,
      name,
      sortBy,
      sortOrder = SortOrder.ASCENDING
   }: DataEntry): void {
      // Make sure a date entry isn't being created that uses a reserved data key.
      if (!force && this.isReservedName(name)) {
         console.log('ROCKET DATA CREATE:', `The data key name "${name}" that you submitted is reserved and therefore invalid. Please use a different name.`);
         return;
      }
      if (this.exists(name)) {
         console.log('ROCKET DATA CREATE:', `The data key name "${name}" that you submitted already exists. Rather use the update method to update the existing data.`);
         return;
      }

      const sortedData = this.sortData({data, sortBy, sortOrder});
      /*
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
      // Start by deleting the observable data.
      if (this.isObservable(name)) {
         this.dataStore.delete(`${name}$`);
         RocketArray.remove({data: this.dataIsObservable, value: name});
      }
      // Now remove the actual data entry.
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

      // Check to see if the data is of type observable.
      return (theData && this.isObservable(name)) ? theData.getValue() : theData;
   }

   /**
    * Get a list of the data store keys.
    */
   public getDataStoreKeys(): string[] {
      return Array.from(this.dataStore.keys());
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
    * Get the subscriptions based on the provided observables and options. If its one
    * subscription then return it directly else use a combineLatest and return all
    * of the observables. This is used predominantly to manage the subscriptions of
    * the data helper class.
    *
    * @param options - The deconstructed options object.
    * @param options.name - A single instance or list of named data observables.
    * @param options.onEmit - Call a function that will handle the data each time it is emitted to this subscriber.
    * @param options.safeEmit - Only call the onEmit function if there is actual data.
    */
   public getSubscriptionFromOptions({
      name,
      onEmit,
      safeEmit = true
   }: SubscribeToOptions): Subscription {
      // Sanitise the observables list.
      name = this.sanitiseObservables(name);

      /*
       * Now lets manage the subscription. If its one subscription then subscribe to
       * it directly else use a combineLatest and subscribe to all of the
       * observables.
       */
      if (name.length === 1) {
         return name[0]
            .pipe(filter((response: any) => (safeEmit) ? response != undefined : true))
            .subscribe((response: any) => onEmit(response));
      } else if (name.length > 1) {
         return combineLatest(name)
            .pipe(
               filter((response: any) => {
                  if (safeEmit) {
                     /*
                      * Since we are cleaning the array, we can check the length to
                      * make sure that all the observables have emited valid data.
                      */
                     const cleanResponse = RocketArray.clean({
                        data: response,
                        hardClean: true
                     });
                     return (cleanResponse.length === name.length) ? true : false;
                  } else {
                     return true;
                  }
               })
            )
            .subscribe((response: any) => onEmit(response));
      }
   }

   /**
    * On initialization create the data observables configured via the config service.
    */
   private initializeData(): void {
      const initData = [
         ...this.rocketConfig.initData,
         new DataEntry({
            name: DataName.PANES,
            data: new Map<string, Pane>(),
            force: true
         }),
         new DataEntry({
            name: DataName.DOCUMENT_CLICK,
            force: true
         }),
         new DataEntry({
            name: DataName.WINDOW_SIZE,
            force: true
         }),
         new DataEntry({
            name: DataName.WINDOW_SIZE_VALUE,
            force: true
         })
      ];

      // Iterate over the list and create the observables.
      initData.forEach((options: DataEntry) => {
         this.create(options);
      });
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
    * Check to see if the desired name is a reserved data key name.
    *
    * @param name - The key name of the data in the data store map.
    */
   public isReservedName(name: string): boolean {
      return this.reservedDataKeys.includes(name);
   }

   /**
    * Sanitise the provided observables list and make them ready for subscription.
    *
    * @param observableNames - The observable names to sanitise.
    */
   private sanitiseObservables(observableNames: any): Observable<any>[] {
      // Make sure that "observables" is an array. If not then convert it into one.
      observableNames = RocketArray.make({data: observableNames});
      // Make sure the observables in the array are actually observables.
      observableNames = RocketArray.clean({
         hardClean: true,
         data: observableNames.map((item: any) => {
            // Handle a string entry.
            if (RocketIs.string(item)) {
               /*
                * If no observable is found, then warn the user, create a data entry
                * and return it. That way subscribers always have some data to work
                * with but this is a concern and should be managed correctly.
                *
                * Make sure we only create non-reservaed observables.
                */
               if (!this.exists(item) && !this.isReservedName(item)) {
                  console.log('ROCKET DATA OBSERVABLE:', `No observable data with name "${item}" was found, so one has been created. This is not ideal. Create the observable data ahead of time instead.`);
                  this.create(new DataEntry({name: item, data: RocketData.BLANK}));
               }

               return this.getObservable(item);
            } else if (item instanceof Observable) {
               return item;
            }
         })
      });

      return observableNames;
   }

   /**
    * Determine if and how to sort the data being passed into the method of this
    * service.
    *
    * @param options - The deconstructed options object.
    * @param options.data - The data to sort.
    * @param options.sortBy - Sort the data by a property.
    * @param options.sortOrder - The order to sort the data.
    */
   private sortData({data, sortBy, sortOrder = SortOrder.ASCENDING}: SortDataOptions): any {
      if (sortBy && sortBy.length > 0) {
         if (RocketIs.array(data)) {
            RocketSort.array({data: data, by: sortBy, order: sortOrder});
         } else if (RocketIs.map(data)) {
            RocketSort.map({data: data, by: sortBy, order: sortOrder});
         }
      }

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
      sortOrder = SortOrder.ASCENDING
   }: DataEntry): void {
      // If the observable does not exist, create it so that it can be managed.
      if (!this.exists(name)) {
         console.log('ROCKET DATA UPDATE:', `No data with name "${name}" was found, so one has been created`);
         this.create({name, data: RocketData.BLANK});
      }

      // Sort the data if required.
      const sortedData = this.sortData({data, sortBy, sortOrder});

      // Update the data.
      if (this.isObservable(name)) {
         this.dataStore.get(name).next(sortedData);
      } else {
         this.dataStore.set(name, sortedData);
      }
   }
}
