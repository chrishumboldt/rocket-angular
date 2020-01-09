/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input } from '@angular/core';

import { Direction } from '../../store/direction.store';
import { SizeType } from '../../store/size.store';

@Component({
   selector: 'rocket-arrow',
   template: '',
   styleUrls: ['./arrow.component.scss']
})
export class RocketArrowComponent {
   @Input() size = SizeType.SMALL;
   @Input() type = Direction.RIGHT;

   @HostBinding('class') get getClassNames() {
      return `_size-${this.size} _type-${this.type}`;
   }
}
