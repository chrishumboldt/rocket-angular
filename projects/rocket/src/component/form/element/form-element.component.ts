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
import { ColourCode } from '../../../store/colour.store';
import { FormStyle, FormStyleArray } from '../../../store/form.store';

@Component({
   selector: 'rocket-form-element',
   template: ''
})
export class RocketFormElementComponent extends RocketHelper implements OnInit {
   public classNames: string[] = [];
   @Input() colour: string;
   public colourStart = ColourCode.GREY_X_LIGHT;
   @Input() data: any;
   @Output() dataChange = new EventEmitter();
   @Input() disabled = false;
   public focus = false;
   public formStyle = FormStyle;
   public lineWidth = 0;
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
      this.setColour();
      this.setStyle();
      this.ngOnInitExtend();
   }

   /**
    * An empty method that extends the onInit event.
    */
   public ngOnInitExtend(): void {}

   /**
    * Handle the data value change.
    *
    * @param event - The key up event.
    */
   public handleDataChange(event: any): void {
      this.data = event.target.value;
      this.dataChange.emit(this.data);
   }

   /**
    * Handle the form element focus state change.
    *
    * @param focusState - The new focus state to set.
    */
   public handleFocus(focusState: boolean): void {
      this.focus = focusState;

      // Handle the line style attribute if required.
      if (this.style === FormStyle.LINE) {
         this.lineWidth = (focusState) ? 100 : 0;
      }
      // Call the method extension.
      this.handleFocusExtend();
   }

   /**
    * An extension to the handle focus event. Is meant to be overwritten.
    */
   public handleFocusExtend(): void {}

   /**
    * Set the form colour value.
    */
   private setColour(): void {
      if (!this.colour || this.colour.length < 1) {
         this.colour = this.rocketConfig.formColour;
      }
   }

   /**
    * Set the form style.
    */
   private setStyle(): void {
      if (!this.style || !FormStyleArray.includes(this.style)) {
         this.style = this.rocketConfig.formStyle;
      }
      this.classNames.push(`_style-${this.style}`);

      // Set the border to a darker colour on the line style form elements.
      if (this.style === FormStyle.LINE) {
         this.colourStart = ColourCode.GREY_LIGHT;
      }
   }
}
