/**
 * @author Chris Humboldt
 */

import { ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataEntry, SubscribeToOptions } from '../model/data.model';
import { RocketDataService } from '../service/data/data.service';

export abstract class RocketHelper implements OnDestroy {
   private subscriptions: Subscription[] = [];

   constructor(
      public rocketData: RocketDataService,
      public elm?: ElementRef
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
      return this.rocketData.create(options);
   }

   /**
    * Get data via the Rocket Data Service get method.
    *
    * @param name - The key name of the data in the data store map.
    */
   public getData(name: string): void {
      return this.rocketData.get(name);
   }

   /**
    * Get the keys of the data stored in the data service.
    */
   public getDataKeys(): string[] {
      /*
       * Make sure the observable name is not returned and merely the
       * behaviour subjects.
       */
      return this.rocketData.getDataStoreKeys().filter((item: string) => {
         return (item.charAt(item.length - 1) !== '$');
      });
   }

   /**
    * Subscribe to an observable and react to the responses.
    *
    * @param options - The method options.
    */
   public subscribeToData(options: SubscribeToOptions): any {
      // Determine the subscription based on the amount of observables.
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
      return this.rocketData.update(options);
   }
}
