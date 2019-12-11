/**
 * @author Chris Humboldt
 */

import { animate, state, style, transition, trigger } from '@angular/animations';

export const RevealDownTrigger = trigger('revealDown', [
   state('true', style({
      height: '{{height}}%',
      opacity: 1
   }), {params: {height: '100'}}),
   state('false', style({
      height: 0,
      opacity: 0
   })),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);

export const RevealRightTrigger = trigger('revealRight', [
   state(
      'true',
      style({
         width: '{{width}}%',
         opacity: '{{endOpacity}}'
      }),
      {
         params: {
            endOpacity: 1,
            width: '100'
         }
      }
   ),
   state(
      'false',
      style({
         width: 0,
         opacity: '{{startingOpacity}}'
      }),
      {
         params: {
            startingOpacity: 0
         }
      }
   ),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);

export const Rotate180Trigger = trigger('rotate180', [
   state('true', style({
      transform: 'rotate(180deg)'
   })),
   state('false', style({
      transform: 'rotate(0deg)'
   })),
   transition('true <=> false', [animate('0.3s')])
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
