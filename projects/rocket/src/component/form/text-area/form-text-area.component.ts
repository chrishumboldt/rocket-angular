/**
 * @author Chris Humboldt
 */

import { Component } from '@angular/core';

import { RocketConfigService } from '../../../service/config/config.service';
import { RocketDataService } from '../../../service/data/data.service';
import { RocketFormElementComponent } from '../element/form-element.component';

@Component({
   selector: 'rocket-text-area',
   templateUrl: './form-text-area.component.html',
   styleUrls: ['./form-text-area.component.scss']
})
export class RocketFormTextAreaComponent extends RocketFormElementComponent {
   constructor(
      public rocketConfig: RocketConfigService,
      public rocketData: RocketDataService
   ) {
      super(rocketConfig, rocketData);
   }
}
