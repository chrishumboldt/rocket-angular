/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { SizeText } from '../../../store/size.store';

@Component({
   selector: 'rocket-body',
   template: '<ng-content></ng-content>',
   styleUrls: ['./layout-body.component.scss']
})
export class RocketLayoutBodyComponent {
   @Input() center = true;
   @Input() classNames = '';
   @Input() limit = SizeText.MEDIUM;
   @Input() padding = SizeText.MEDIUM;

   // Apply classes to the host element.
   @HostBinding('class') get getClassNames() {
      return `_center-${this.center} _limit-${this.limit} _padding-${this.padding} ${this.classNames}`.trim();
   }
}
