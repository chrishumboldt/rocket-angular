/**
 * @author Chris Humboldt
 */

import { TestBed } from '@angular/core/testing';

import { Direction } from '../../store/direction.store';
import { SizeType } from '../../store/size.store';
import { RocketArrowComponent } from './arrow.component';

describe('Rocket Arrow Component:', () => {
   let rocketArrow: RocketArrowComponent;

   // Setup the tests.
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            RocketArrowComponent
         ]
      });

      rocketArrow = TestBed.get(RocketArrowComponent);
   });

   // Tests.
   it('Should initialise.', () => {
      expect(rocketArrow).toBeTruthy();
   });

   it('Should contain the correct inputs.', () => {
      expect(rocketArrow.size).toEqual(SizeType.SMALL);
      expect(rocketArrow.type).toEqual(Direction.RIGHT);
   });

   it('Should have the correct classes.', () => {
      const classNames = rocketArrow.getClassNames.split(' ');

      expect(classNames.includes(`_size-${rocketArrow.size}`)).toBeTruthy();
      expect(classNames.includes(`_type-${rocketArrow.type}`)).toBeTruthy();
   });
});
