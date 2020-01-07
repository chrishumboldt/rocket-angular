/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { ChangeBorderTrigger } from '../../../store/animation.store';
import { RocketFormElementComponent } from '../element/form-element.component';

@Component({
   selector: 'rocket-select',
   templateUrl: './form-select.component.html',
   styleUrls: [
      '../style/setup.scss',
      '../style/label.scss',
      '../style/select.scss'
   ],
   animations: [ChangeBorderTrigger]
})
export class RocketFormSelectComponent extends RocketFormElementComponent {
   @Input() bodyKey = 'body';
   @Input() label: string;
   @Input() options: any[] = [];
   @Input() valueKey = 'value';

   @HostBinding('@changeBorder') get activateDeactivate() {
      return {
         value: (this.style !== this.formStyle.LINE && this.focus),
         params: {
            colourStart: this.colourStart,
            colourEnd: this.colour
         }
      };
   }
}
