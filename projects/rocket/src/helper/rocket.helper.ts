/**
 * @author Chris Humboldt
 */

import { ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataEntry, SubscribeToParams } from '../model/data.model';
import { RocketDataService } from '../service/data/data.service';

export abstract class RocketHelper implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(public rocketData: RocketDataService, public elm?: ElementRef) {}

  ngOnDestroy() {
    this.subscriptionsDestroy();
  }

  /**
   * Create data via the Rocket Data Service create method.
   *
   * @param params.asObservable - Create the data as an observable.
   * @param params.data - The optional data to create.
   * @param params.name - The name identifier of the data.
   * @param params.sortBy - The optional sort by key.
   * @param params.sortOrder - The order of the sort.
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
      return item.charAt(item.length - 1) !== '$';
    });
  }

  /**
   * Subscribe to an observable and react to the responses.
   *
   * @param params.name - The name(s) of the data to subscribe to.
   * @param params.onEmit - The function to call when data emits.
   * @param params.safeEmit - Check to only emit if there is data.
   */
  public subscribeToData(params: SubscribeToParams): any {
    // Determine the subscription based on the amount of observables.
    this.subscriptionAdd(this.rocketData.getSubscriptionFromOptions(params));
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
   * @param params.asObservable - Create the data as an observable.
   * @param params.data - The optional data to create.
   * @param params.name - The name identifier of the data.
   * @param params.sortBy - The optional sort by key.
   * @param params.sortOrder - The order of the sort.
   */
  public updateData(params: DataEntry): void {
    return this.rocketData.update(params);
  }
}
