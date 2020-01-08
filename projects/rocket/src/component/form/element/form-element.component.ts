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
import { State } from '../../../store/state.store';

@Component({
   selector: 'rocket-form-element',
   template: ''
})
export class RocketFormElementComponent extends RocketHelper implements OnInit {
   @Input() autocomplete: State;
   @Input() autocorrect: State;
   @Input() autocapitalize: State;
   @HostBinding('class') classes = '';
   @Input() colour: string;
   public colourStart = ColourCode.GREY_X_LIGHT;
   @Input() data: any;
   @Output() dataChange = new EventEmitter();
   @Input() disabled = false;
   public focus = false;
   @Input() formStyle: FormStyle;
   public formStyles = FormStyle;
   public lineWidth = 0;
   @Input() max: number;
   @Input() min: number;
   @Input() size: number;
   @Input() spellcheck: State;
   public states = State;
   @Input() slideLabel = this.rocketConfig.formSlideLabel;
   public slideLabelTop = '-12px';

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
    * @param value - The the new value.
    */
   public handleDataChange(value: any): void {
      this.data = value;
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
      if (this.formStyle === FormStyle.LINE) {
         this.lineWidth = (focusState) ? 100 : 0;
      }
      // Call the method extension.
      this.handleFocusExtend();
   }

   /**
    * An extension to the handle focus event. Its designed to be overwritten.
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
      if (!this.formStyle || !FormStyleArray.includes(this.formStyle)) {
         this.formStyle = this.rocketConfig.formStyle;
      }
      this.classes = `_style-${this.formStyle}`;

      /*
       * Set the border to a darker colour on the line style form elements. Also set the
       * top value of the slide label when active.
       */
      if (this.formStyle === FormStyle.LINE) {
         this.colourStart = ColourCode.GREY_LIGHT;
      } else if (this.formStyle === FormStyle.FLAT) {
         this.slideLabelTop = '-20px';
      } else if (this.formStyle === FormStyle.OUTLINE) {
         this.slideLabelTop = '-20px';
      }
   }
}
