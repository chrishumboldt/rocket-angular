/**
 * @author Chris Humboldt
 */

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataEntry } from './data-entry.class';
import { SubscribeToOptions } from './data.interface';
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
    * Create data via the Rocket Data Service create method.
    *
    * @param options - The options.
    */
   public createData(options: DataEntry): void {
      this.rocketData.create(options);
   }

   /**
    * Get data via the Rocket Data Service get method.
    *
    * @param name - The key name of the data in the data store map.
    */
   public getData(name: string): void {
      this.rocketData.get(name);
   }

   /**
    * Subscribe to an observable and react to the responses.
    *
    * @param options - The method options.
    */
   public subscribeToData(options: SubscribeToOptions): any {
      /**
       * Determine the subscription based on the amount of observables.
       */
      this.subscriptionAdd(this.rocketData.getSubscriptionFromOptions(options));
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
    * Update data via the Rocket Data Service update method.
    *
    * @param options - The options.
    */
   public updateData(options: DataEntry): void {
      this.rocketData.update(options);
   }
}
