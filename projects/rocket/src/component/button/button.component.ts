/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { RocketConfigService } from '../../service/config/config.service';
import {
   ButtonSize,
   ButtonSizeArray,
   ButtonShape,
   ButtonShapeArray,
   ButtonStyle,
   ButtonStyleArray
} from '../../store/button.store';

@Component({
   selector: 'rocket-button',
   templateUrl: './button.component.html',
   styleUrls: ['./button.component.scss']
})
export class RocketButtonComponent implements OnInit {
   private classNames: string[] = [];
   @Input() colour: string;
   @Input() shape: ButtonShape;
   @Input() size: ButtonSize;
   @Input() style: ButtonStyle;
   @Input() text = 'Button';
   @Input() type = 'button';

   // Set the classes.
   @HostBinding('class') get getClassName() {
      return this.classNames.join(' ');
   }

   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   ngOnInit() {
      this.setColour();
      this.setShape();
      this.setSize();
      this.setStyle();
   }

   /**
    * Set the button colour.
    */
   private setColour(): void {
      const colourClass = (this.colour) ? this.colour : this.rocketConfig.buttonColour;

      this.classNames.push(`_colour-${colourClass}`);
   }

   /**
    * Set the button shape.
    */
   private setShape(): void {
      let shapeClass: ButtonShape;

      if (this.shape && ButtonShapeArray.includes(this.shape)) {
         shapeClass = this.shape;
      } else {
         shapeClass = this.rocketConfig.buttonShape;
      }

      this.classNames.push(`_shape-${shapeClass}`);
   }

   /**
    * Set the size of the button.
    */
   private setSize(): void {
      let sizeClass: ButtonSize;

      if (this.size && ButtonSizeArray.includes(this.size)) {
         sizeClass = this.size;
      } else {
         sizeClass = this.rocketConfig.buttonSize;
      }

      this.classNames.push(`_size-${sizeClass}`);
   }

   /**
    * Set the button style.
    */
   private setStyle(): void {
      let styleClass: ButtonStyle;

      if (this.style && ButtonStyleArray.includes(this.style)) {
         styleClass = this.style;
      } else {
         styleClass = this.rocketConfig.buttonStyle;
      }

      this.classNames.push(`_style-${styleClass}`);
   }
}
