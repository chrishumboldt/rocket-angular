/**
 * @author Chris Humboldt
 */

import { animate, state, style, transition, trigger } from '@angular/animations';

export const RevealDownTrigger = trigger('revealDown', [
   state('activated', style({
      height: '*',
      opacity: 1
   })),
   state('deActivated', style({
      height: 0,
      opacity: 0
   })),
   transition('activated <=> deActivated', [animate('0.2s 0s ease-out')])
]);

export const Rotate180Trigger = trigger('rotate180', [
   state('activated', style({
      transform: 'rotate(180deg)'
   })),
   state('deActivated', style({
      transform: 'rotate(0deg)'
   })),
   transition('activated <=> deActivated', [animate('0.2s')])
]);


export const SlideFromRightTrigger = trigger('slideFromRight', [
   state('true', style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
   })),
   state('false', style({
      opacity: 0,
      transform: 'translate3d(245px, 0, 0)'
   })),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);
