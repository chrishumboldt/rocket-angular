/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageType } from '../stores';

@Injectable({
   providedIn: 'root'
})
export class RocketDefaultsService {
   /**
    * Web storage defaults.
    */
   private storageName = new BehaviorSubject<string>('RocketStorage');
   public storageName$ = this.storageName.asObservable();
   private storageType = new BehaviorSubject<StorageType>(StorageType.SESSION);
   public storageType$ = this.storageType.asObservable();
}
