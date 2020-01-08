/**
 * @author Chris Humboldt
 */

import { animate, state, style, transition, trigger } from '@angular/animations';

import { ColourCode } from './colour.store';

export const ChangeBorderTrigger = trigger('changeBorder', [
   state(
      'false',
      style({
         borderColor: '{{colourStart}}'
      }),
      {
         params: {
            colourStart: ColourCode.WHITE
         }
      }
   ),
   state(
      'true',
      style({
         borderColor: '{{colourEnd}}'
      }),
      {
         params: {
            colourEnd: ColourCode.BLUE
         }
      }
   ),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);

export const FormSlideLabelTrigger = trigger('formSlideLabel', [
   state(
      'true',
      style({
         top: '{{top}}',
         fontSize: '0.750rem',
         color: '#bfbfbf'
      }),
      {
         params: {
            top: '0px'
         }
      }
   ),
   transition('* <=> true', [animate('0.3s 0s ease-out')])
]);

export const RevealDownTrigger = trigger('revealDown', [
   state(
      'false',
      style({
         height: 0,
         opacity: 0
      })
   ),
   state(
      'true',
      style({
         height: '{{height}}%',
         opacity: 1
      }),
      {
         params: {
            height: '100'
         }
      }
   ),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);

export const RevealRightTrigger = trigger('revealRight', [
   state(
      'false',
      style({
         width: 0,
         opacity: '{{opacityStart}}'
      }),
      {
         params: {
            opacityStart: 0
         }
      }
   ),
   state(
      'true',
      style({
         width: '{{width}}%',
         opacity: '{{opacityEnd}}'
      }),
      {
         params: {
            opacityEnd: 1,
            width: '100'
         }
      }
   ),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);

export const Rotate180Trigger = trigger('rotate180', [
   state(
      'false',
      style({
         transform: 'rotate(0deg)'
      })
   ),
   state(
      'true',
      style({
         transform: 'rotate(180deg)'
      })
   ),
   transition('true <=> false', [animate('0.3s')])
]);


export const SlideFromRightTrigger = trigger('slideFromRight', [
   state(
      'false',
      style({
         opacity: 0,
         transform: 'translate3d(245px, 0, 0)'
      })
   ),
   state(
      'true',
      style({
         opacity: 1,
         transform: 'translate3d(0, 0, 0)'
      })
   ),
   transition('true <=> false', [animate('0.3s 0s ease-out')])
]);
