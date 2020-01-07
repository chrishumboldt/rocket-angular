/**
 * @author Chris Humboldt
 */

import { Component, Input } from '@angular/core';

import { RocketConfigService } from '../../../service/config/config.service';
import { RocketDataService } from '../../../service/data/data.service';
import { ChangeBorderTrigger } from '../../../store/animation.store';
import { FormInputType, FormInputTypeArray } from '../../../store/form.store';
import { RocketFormElementComponent } from '../element/form-element.component';

@Component({
   selector: 'rocket-input',
   templateUrl: './form-input.component.html',
   styleUrls: [
      '../style/setup.scss',
      '../style/input.scss',
      '../style/label.scss'
   ],
   animations: [ChangeBorderTrigger]
})
export class RocketFormInputComponent extends RocketFormElementComponent {
   @Input() label: string;
   @Input() type: FormInputType;

   constructor(
      public rocketConfig: RocketConfigService,
      public rocketData: RocketDataService
   ) {
      super(rocketConfig, rocketData);
   }

   ngOnInitExtend() {
      this.setType();
   }

   /**
    * Set the input type.
    */
   private setType(): void {
      if (!this.setType || !FormInputTypeArray.includes(this.type)) {
         this.type = this.rocketConfig.formInputType;
      }
   }
}
