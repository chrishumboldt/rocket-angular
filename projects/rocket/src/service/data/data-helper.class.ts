/**
 * @author Chris Humboldt
 */

import { OnDestroy } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RocketArray, RocketIs } from '../../tool';

import {
   AddDataOptions,
   SubscribeToOptions,
   UpdateDataOptions
} from './data.interface';
import { RocketDataService } from './data.service';

export abstract class RocketDataHelper implements OnDestroy {
   private subscriptions: Subscription[] = [];

   constructor(
      public rocketData: RocketDataService
   ) {}

   ngOnDestroy() {
      this.subscriptionsDestroy();
   }

   /**
    * Connect to the Rocket Data Service create method.
    *
    * @param options - The options.
    */
   public createData(options: AddDataOptions): void {
      this.rocketData.create(options);
   }

   /**
    * Connect to the Rocket Data Service get method.
    *
    * @param name - The key name of the data in the data store map.
    */
   public getData(name: string): void {
      this.rocketData.get(name);
   }

   /**
    * Subscribe to an observable and react to the responses.
    *
    * @param options - The deconstructed options object.
    * @param options.observables - A single instace of list of named observables in the data service or observables itself.
    * @param options.onEmit - Call a function that will handle the data each time it is emitted to this subscriber.
    * @param options.safeEmit - Only call the onEmit function if there is actual data.
    */
   public subscribeToData({
      observables,
      onEmit,
      safeEmit = true
   }: SubscribeToOptions): any {
      /**
       * Make sure that "observables" is an array. If not then convert it into one.
       */
      observables = RocketArray.make(observables);
      /**
       * Make sure the observables in the array are actually observables.
       */
      observables = RocketArray.clean({
         hardClean: true,
         data: observables.map((item: any) => {
            /**
             * Handle a string entry and make sure the name is not a reserved data key.
             */
            if (RocketIs.string(item) && !this.rocketData.isReserved(item)) {
               return this.rocketData.getObservable(item);
            } else if (item instanceof Observable) {
               return item;
            }
         })
      });
      /**
       * Now lets manage the subscription. If its one subscription then subscribe to
       * it directly else use a combineLatest and subscribe to all of the
       * observables.
       */
      if (observables.length === 1) {
         this.subscriptionAdd(observables[0]
            .pipe(filter((response: any) => (safeEmit) ? response != undefined : true))
            .subscribe((response: any) => onEmit(response))
         );
      } else if (observables.length > 1) {
         this.subscriptionAdd(combineLatest(observables)
            .pipe(
               filter((response: any) => {
                  if (safeEmit) {
                     /**
                      * Since we are cleaning the listing, we can check the length to
                      * make sure that all the observables have emited valid data.
                      */
                     const cleanResponse = RocketArray.clean({
                        data: response,
                        hardClean: true
                     });
                     return (cleanResponse.length === observables.length) ? true : false;
                  } else {
                     return true;
                  }
               })
            )
            .subscribe((response: any) => onEmit(response))
         );
      }
   }

   /**
    * Add to the subscription list.
    *
    * @param subscription - The subscription we need to add.
    */
   public subscriptionAdd(subscription: Subscription): void {
      if (subscription) {
         this.subscriptions.push(subscription);
      }
   }

   /**
    * Destroy all the subscriptions.
    */
   public subscriptionsDestroy(): void {
      if (this.subscriptions && this.subscriptions.length > 0) {
         this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
   }

   /**
    * Connect to the Rocket Data Service update method.
    *
    * @param options - The options.
    */
   public updateData(options: UpdateDataOptions): void {
      this.rocketData.update(options);
   }
}
