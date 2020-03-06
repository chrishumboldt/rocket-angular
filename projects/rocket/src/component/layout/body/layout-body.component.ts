/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { RocketArray } from '../../../tool/array/array.tool';
import { SizeType } from '../../../store/size.store';

@Component({
  selector: 'rocket-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-body.component.scss']
})
export class RocketLayoutBodyComponent {
  @Input() center = true;
  @Input() classNames = '';
  @Input() limit = SizeType.MEDIUM;
  @Input() padding = SizeType.MEDIUM;
  @Input() row = false;

  // Apply classes to the host element.
  @HostBinding('class') get classes() {
    return RocketArray.clean({
      data: [
        `_center-${this.center}`,
        `_limit-${this.limit}`,
        `_padding-${this.padding}`,
        `_row-${this.row}`,
        `${this.classNames}`
      ],
      hardClean: true
    }).join(' ');
  }
}
