/**
 * @author Chris Humboldt
 */

import {
   Component,
   EventEmitter,
   HostBinding,
   Input,
   OnInit,
   Output
} from '@angular/core';

import { RocketHelper } from '../../../helper/rocket.helper';
import { RocketConfigService } from '../../../service/config/config.service';
import { RocketDataService } from '../../../service/data/data.service';
import {
   FormStyle,
   FormStyleArray
} from '../../../store/form.store';

@Component({
   selector: 'rocket-form-element',
   template: ''
})
export class RocketFormElementComponent extends RocketHelper implements OnInit {
   public classNames: string[] = [];
   @Input() data: any;
   @Output() dataChange = new EventEmitter();
   @Input() disabled = false;
   @Input() style: FormStyle;

   // Set the classes.
   @HostBinding('class') get getClassNames() {
      return this.classNames.join(' ');
   };

   constructor(
      public rocketConfig: RocketConfigService,
      public rocketData: RocketDataService
   ) {
      super(rocketData);
   }

   ngOnInit() {
      this.setStyle();
      this.ngOnInitExtend();
   }

   /**
    * Create an empty method that extends the onInit event.
    */
   public ngOnInitExtend(): void {}

   /**
    * handle the data value change.
    */
   public handlChange(): void {
      this.dataChange.emit(this.data);
   }

   /**
    * Set the form style.
    */
   private setStyle(): void {
      if (!this.style || !FormStyleArray.includes(this.style)) {
         this.style = this.rocketConfig.formStyle;
      }
      this.classNames.push(`_style-${this.style}`);
   }
}
