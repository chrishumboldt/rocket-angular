/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { RocketArray } from '../../../tool/array/array.tool';

@Component({
  selector: 'rocket-span',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-span.component.scss']
})
export class RocketLayoutSpanComponent {
  @Input() classes = '';
  @Input() offset: number;
  @Input() width = 1;

  @HostBinding('class') get getClasses(): string {
    const returnArray = [`_span-${this.width}`, this.classes];

    // Check for an offset.
    if (this.offset) {
      returnArray.push(`_offset-${this.offset}`);
    }

    return RocketArray.clean({ data: returnArray, hardClean: true }).join(' ');
  }
}
