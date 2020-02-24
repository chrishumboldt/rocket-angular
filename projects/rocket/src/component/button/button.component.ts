/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

import { RocketConfigService } from '../../service/config/config.service';
import { ButtonClickTrigger } from '../../store/animation.store';
import {
   ButtonSize,
   ButtonSizeArray,
   ButtonShape,
   ButtonShapeArray,
   ButtonRender,
   ButtonRenderArray,
   ButtonType
} from '../../store/button.store';
import { MonoColour } from '../../store/colour.store';
import { LoaderSize } from '../../store/loader.store';
import { State } from '../../store/state.store';

@Component({
   selector: 'rocket-button',
   templateUrl: './button.component.html',
   styleUrls: ['./button.component.scss'],
   animations: [ButtonClickTrigger]
})
export class RocketButtonComponent implements OnInit {
   private classNames: string[] = [];
   public clickedState = false;
   @Input() colour: string;
   public loaderColour: string;
   public loaderSize = LoaderSize.SMALL;
   @Input() render: ButtonRender;
   @Input() shape: ButtonShape;
   @Input() size: ButtonSize;
   @Input() state = State.ACTIVE;
   public states = State;
   @Input() text = 'Button';
   @Input() type = ButtonType.BUTTON;
   // Host bindings.
   @HostBinding('class') get getClassNames() {
      return this.classNames.join(' ');
   }

   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   ngOnInit() {
      this.setColour();
      this.setShape();
      this.setRender();
      this.setSize();
   }

   /**
    * Listen to the mouse events and set the click state.
    */
   @HostListener('mousedown')
   mouseDownEvent() {
      this.clickedState = true;
   };
   @HostListener('mouseup')
   mouseUpEvent() {
      this.clickedState = false;
   };

   /**
    * Set the button colour.
    */
   private setColour(): void {
      if (!this.colour) {
         this.colour = this.rocketConfig.buttonColour;
      }

      this.classNames.push(`_colour-${this.colour}`);
   }

   /**
    * Set the button render style.
    */
   private setRender(): void {
      if (!this.render && !ButtonRenderArray.includes(this.render)) {
         this.render = this.rocketConfig.buttonRender;
      }

      this.classNames.push(`_render-${this.render}`);

      // Set the loader colour.
      this.loaderColour = (this.render === ButtonRender.FLAT) ? MonoColour.WHITE : this.colour;
   }

   /**
    * Set the button shape.
    */
   private setShape(): void {
      if (!this.shape || !ButtonShapeArray.includes(this.shape)) {
         this.shape = this.rocketConfig.buttonShape;
      }

      this.classNames.push(`_shape-${this.shape}`);
   }

   /**
    * Set the size of the button.
    */
   private setSize(): void {
      if (!this.size || !ButtonSizeArray.includes(this.size)) {
         this.size = this.rocketConfig.buttonSize;
      }

      this.classNames.push(`_size-${this.size}`);
   }
}
