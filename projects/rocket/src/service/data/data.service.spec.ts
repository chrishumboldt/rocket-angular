/**
 * @author Chris Humboldt
 */

import { async, TestBed } from '@angular/core/testing';

import { RocketConfigService } from '../config/config.service';
import { RocketConfig } from '../../model/config.model';
import { DataName } from '../../store/data.store';
import { RocketIs } from '../../tool/is/is.tool';
import { RocketDataService } from './data.service';

describe('Rocket Data Service:', () => {
   const dataArray = ['Obi-wan Kenobi', 'Yoda', 'Luke Skywalker'];
   const dataName = 'jedi';
   const dataValue = 'Luke Skywalker';
   let rocketData: RocketDataService;

   /**
    * Setup each test.
    */
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            RocketConfig,
            RocketConfigService,
            RocketDataService
         ]
      });

      rocketData = TestBed.get(RocketDataService);
   });

   afterEach(() => {
      // Clear the data store after each test.
      rocketData.clear();
   });

   /**
    * Tests.
    */
   it('Should initialise.', () => {
      expect(rocketData).toBeTruthy();
   });

   it('Should clear the entire data store.', () => {
      // Create en entry and test that it exists.
      rocketData.create({name: dataName, data: dataValue});
      expect(rocketData.get(dataName)).toBe(dataValue);

      // Now clear the data and test again.
      rocketData.clear();
      expect(rocketData.get(dataName)).toBeFalsy();
      expect(rocketData.dataStore.size).toEqual(0);
   });

   it('Should create a new entry in the data store as an observable.', () => {
      rocketData.create({name: dataName, data: dataArray});

      // Now test the data.
      expect(rocketData.dataStore.get(dataName)).toBeTruthy();

      rocketData.dataStore.get(dataName).subscribe((data: string[]) => {
         expect(data).toBeTruthy();
         expect(data.length).toEqual(3);
         expect(data[0]).toBe(dataArray[0]);
         expect(data[1]).toBe(dataArray[1]);
         expect(data[2]).toBe(dataArray[2]);
      });
   });

   it('Should create a new entry in the data store as a key/value pair.', () => {
      rocketData.create({
         name: dataName,
         data: dataValue,
         asObservable: false
      });

      // Now test the data.
      expect(rocketData.dataStore.get(dataName)).toBe(dataValue);
   });

   it('Should destroy an entry in the data store.', () => {
      rocketData.create({name: dataName, data: dataValue});

      // Make sure it exists before destroying it.
      expect(rocketData.dataStore.get(dataName)).toBeTruthy();

      // Destroy the data and test.
      rocketData.destroy(dataName);
      expect(rocketData.dataStore.get(dataName)).toBeFalsy();
   });

   it('Should check to see if a data entry exists or not.', () => {
      rocketData.create({name: dataName, data: dataValue});

      // Test existence.
      expect(rocketData.exists(dataName)).toBeTruthy();
      expect(rocketData.exists('Alderaan')).toBeFalsy();
   });

   it('Should get a data entry from the data store.', () => {
      rocketData.create({name: dataName, data: dataValue, asObservable: false});

      expect(rocketData.get(dataName)).toBe(dataValue);
   });

   it('Should get an array of keys from the data store.', () => {
      rocketData.create({name: dataName, data: dataValue});

      // Test that the keys include the above create entry.
      const dataStoreKeys = rocketData.getDataStoreKeys();

      expect(RocketIs.array(dataStoreKeys)).toBeTruthy();
      expect(dataStoreKeys.length).toBeGreaterThan(0);
      expect(dataStoreKeys.includes(dataName)).toBeTruthy();

      // Also test for the Behavior Subject.
      expect(dataStoreKeys.includes(`${dataName}$`)).toBeTruthy();
   });

   it('Should get the data entry from the data store if the data is an observable.', () => {
      /**
       * Of course we are going to create an observable entry and a
       * non-observalbe entry.
       */
      rocketData.create({name: dataName, data: dataValue});
      rocketData.create({name: 'sith', data: 'Darth Vader', asObservable: false});

      expect(rocketData.getObservable(dataName)).toBeTruthy();
      expect(rocketData.getObservable('sith')).toBeFalsy();
   });

   it('Should subscribe to an observable data entry with a safe emission.', async(() => {
      rocketData.create({name: dataName, data: dataValue});

      // Test safely emitted data.
      rocketData.getSubscriptionFromOptions({
         name: dataName,
         onEmit: (data: string) => {
            expect(data).toBeTruthy();
            expect(data).toBe(dataValue);
         }
      });
   }));

   it('Should subscribe to an observable data entry with an unsafe emission.', async(() => {
      rocketData.create({name: 'sith', data: undefined});

      // Test unsafe emission of data.
      rocketData.getSubscriptionFromOptions({
         name: 'sith',
         safeEmit: false,
         onEmit: (data: string) => {
            expect(data).toBeFalsy();
         }
      });
   }));

   it('Should check if a data entry is an observable.', () => {
      rocketData.create({name: dataName, data: dataValue});
      rocketData.create({name: 'sith', data: 'Darth Vader', asObservable: false});

      expect(rocketData.isObservable(dataName)).toBeTruthy();
      expect(rocketData.isObservable('sit')).toBeFalsy();
   });

   it('Should check if a data entry name is reserved.', () => {
      expect(rocketData.isReservedName(DataName.PANES)).toBeTruthy();
      expect(rocketData.isReservedName(dataName)).toBeFalsy();
   });

   it('Should update the data in a data entry.', () => {
      const newData = 'Yoda';

      // Create an entry and test the value.
      rocketData.create({name: dataName, data: dataValue});
      expect(rocketData.get(dataName)).toBe(dataValue);

      // Now update the data and test.
      rocketData.update({name: dataName, data: newData});
      expect(rocketData.get(dataName)).toBe(newData);
   });
});
