/**
 * @author Chris Humboldt
 */

import { ElementRef, OnDestroy } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
import { Subscription } from 'rxjs';

import { Prefix, RocketData } from '../../store';
import { RocketIs, RocketRandom, RocketSize } from '../../tool';

import { DataEntry, SubscribeToOptions } from '../data/data.class';
import { RocketDataService } from '../data/data.service';

export abstract class RocketHelper implements OnDestroy {
   private componentName = RocketRandom.string(RocketData.RANDOM_NAME_LENGTH);
   private componentNameResizing = `${Prefix.RESIZING}${this.componentName}`;
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
    * Inintialise the resize listener on a component using this helper class.
    */
   public initResizingListener(): void {
      /**
       * We first need to create the data observable for this resizing.
       */
      this.createData(new DataEntry({name: this.componentNameResizing}));
      /**
       * Create a resize sensor on this component and update the data on each
       * resize event.
       */
      new ResizeSensor(this.elm.nativeElement, () => {
         this.updateData({
            name: this.componentNameResizing,
            data: RocketSize.size(this.elm.nativeElement)
         });
      });
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
    * Subscribe to the responsive resizing observable data.
    *
    * @param onEmit - The function to execute on emit.
    */
   public subscribeToResizing(onEmit: any): any {
      /**
       * Make sure the onEmit is a function.
       */
      if (!RocketIs.function(onEmit)) {
         return;
      }

      const options = new SubscribeToOptions({
         name: this.componentNameResizing,
         onEmit
      });
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
      return this.rocketData.update(options);
   }
}
