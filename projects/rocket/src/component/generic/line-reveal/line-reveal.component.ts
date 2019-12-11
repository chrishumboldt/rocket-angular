/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { RevealRightTrigger } from '../../../store/animation.store';
import { PrimaryColour } from '../../../store/colour.store';

@Component({
   selector: 'rocket-line-reveal',
   templateUrl: './line-reveal.component.html',
   styleUrls: ['./line-reveal.component.scss'],
   animations: [RevealRightTrigger]
})
export class RocketLineRevealComponent {
   @Input() colour: string = PrimaryColour.BLUE;
   @HostBinding('style.height.px') @Input() height = 2;
   @Input() width = 0;

   // Derived values.
   @Input() get active() {
      return (this.width > 0);
   };
}
