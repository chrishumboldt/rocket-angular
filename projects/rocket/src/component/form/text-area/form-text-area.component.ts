/**
 * @author Chris Humboldt
 */

import { Component, Input } from '@angular/core';

import { RocketConfigService } from '../../../service/config/config.service';
import { RocketDataService } from '../../../service/data/data.service';
import { ChangeBorderTrigger } from '../../../store/animation.store';
import { RocketFormElementComponent } from '../element/form-element.component';

@Component({
   selector: 'rocket-text-area',
   templateUrl: './form-text-area.component.html',
   styleUrls: [
      '../style/setup.scss',
      '../style/input.scss',
      '../style/label.scss',
      './form-text-area.component.scss'
   ],
   animations: [ChangeBorderTrigger]
})
export class RocketFormTextAreaComponent extends RocketFormElementComponent {
   @Input() label: string;

   constructor(
      public rocketConfig: RocketConfigService,
      public rocketData: RocketDataService
   ) {
      super(rocketConfig, rocketData);
   }
}
