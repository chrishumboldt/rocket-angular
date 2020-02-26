/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { FormSlideLabelTrigger } from '../../../store/animation.store';

@Component({
  selector: 'rocket-slide-label',
  templateUrl: './form-slide-label.component.html',
  animations: [FormSlideLabelTrigger]
})
export class RocketFormSlideLabelComponent {
  @Input() active = false;
  @Input() label = '';
  @Input() positionTop = '0px';

  // Assign the animation.
  @HostBinding('@formSlideLabel') get manageAnimation(): any {
    return {
      value: this.active,
      params: {
        top: this.positionTop
      }
    };
  }
}
