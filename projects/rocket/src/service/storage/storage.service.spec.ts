/**
 * @author Chris Humboldt
 */

import { TestBed } from '@angular/core/testing';

import { RocketConfig } from '../../model/config.model';
import { RocketConfigService } from '../config/config.service';
import { RocketStorageService } from './storage.service';

describe('Rocket Storage Service:', () => {
   let rocketStorage: RocketStorageService;

   /**
    * Setup each test.
    */
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            RocketConfig,
            RocketConfigService,
            RocketStorageService
         ]
      });

      rocketStorage = TestBed.get(RocketStorageService);
   });

   /**
    * Remove the storage after the tests.
    */
   afterEach(() => {
      sessionStorage.removeItem('RocketStorage');
   });

   /**
    * Tests.
    */
   it('Should initialise.', () => {
      expect(rocketStorage).toBeTruthy();
   });

   it('Should add some data into storage.', () => {
      rocketStorage.add({name: 'darthVader', data: 'Sith'});

      // Retrieve storage the old fashioned way and check the values.
      const storage: any = JSON.parse(sessionStorage.getItem('RocketStorage'));

      expect(storage.darthVader).toBe('Sith');
   });

   it('Should clear the entire storage.', () => {
      rocketStorage.add({name: 'darthVader', data: 'Sith'});

      // Make sure that the data exists.
      expect(sessionStorage.getItem('RocketStorage')).toBeTruthy();

      // Now clear the storage and make sure that its wiped out.
      rocketStorage.clear();
      expect(sessionStorage.getItem('RocketStorage')).toBeFalsy();
   });

   it('Should clear the storage with exclusions.', () => {
      rocketStorage.add({name: 'darthVader', data: 'Sith'});
      rocketStorage.add({name: 'luke', data: 'Jedi'});
      rocketStorage.add({name: 'r2d2', data: 'droid'});

      // Make sure that the data exists.
      expect(sessionStorage.getItem('RocketStorage')).toBeTruthy();

      // Now clear the storage but exclude r2d2.
      rocketStorage.clear('r2d2');

      // Test the result.
      const storage: any = JSON.parse(sessionStorage.getItem('RocketStorage'));

      expect(storage.r2d2).toBeTruthy();
      expect(storage.darthVader).toBeFalsy();
      expect(storage.luke).toBeFalsy();
   });

   it('Should retrieve storage data.', () => {
      rocketStorage.add({name: 'darthVader', data: 'Sith'});

      // Make sure that the data exists and test the get call.
      expect(sessionStorage.getItem('RocketStorage')).toBeTruthy();
      expect(rocketStorage.get('darthVader')).toBe('Sith');
   });

   it('Should remove an entry from storage.', () => {
      rocketStorage.add({name: 'darthVader', data: 'Sith'});
      rocketStorage.add({name: 'luke', data: 'Jedi'});
      rocketStorage.add({name: 'r2d2', data: 'droid'});

      // Make sure that the data exists.
      expect(sessionStorage.getItem('RocketStorage')).toBeTruthy();

      // Now clear the storage but exclude r2d2.
      rocketStorage.remove('r2d2');

      // Test the result.
      expect(rocketStorage.get('darthVader')).toBe('Sith');
      expect(rocketStorage.get('luke')).toBe('Jedi');
      expect(rocketStorage.get('r2d2')).toBeFalsy();
   });
});
