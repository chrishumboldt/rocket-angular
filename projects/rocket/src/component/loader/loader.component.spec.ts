/**
 * @author Chris Humboldt
 */

import { TestBed } from '@angular/core/testing';

import { RocketConfig } from '../../model/config.model';
import { RocketConfigService } from '../../service/config/config.service';
import { LoaderSize, LoaderType } from '../../store/loader.store';
import { SecondaryColour } from '../../store/colour.store';
import { RocketLoaderComponent } from './loader.component';

describe('Rocket Loader Component:', () => {
   let rocketLoaderComponent: RocketLoaderComponent;

   // Setup the tests.
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            RocketConfig,
            RocketConfigService,
            RocketLoaderComponent
         ]
      });

      rocketLoaderComponent = TestBed.get(RocketLoaderComponent);
   });

   // Tests.
   it('Should initialise.', () => {
      expect(rocketLoaderComponent).toBeTruthy();
   });

   it('Should set all default config variables when initialised.', () => {
      // Run the initialiser.
      rocketLoaderComponent.ngOnInit();

      // Check the values.
      const classNames = rocketLoaderComponent.getClassNames.split(' ');

      expect(classNames.includes(`_colour-${SecondaryColour.GREY_BLUE}`)).toBeTruthy();
      expect(classNames.includes(`_size-${LoaderSize.DEFAULT}`)).toBeTruthy();
      expect(classNames.includes(`_type-${LoaderType.SPINNER}`)).toBeTruthy();
   });
});
