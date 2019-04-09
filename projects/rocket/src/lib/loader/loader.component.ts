/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Rocket, SecondaryColour } from '../tools';
import { LoaderSize, LoaderType } from './loader.enum';

@Component({
   selector: 'rocket-loader',
   templateUrl: './loader.component.html',
   styleUrls: ['./loader.component.scss']
})
export class RocketLoaderComponent implements OnInit {
   @Input() private colour: string;
   @Input() private size: string;
   @Input() private type: string;

   private classNames = '';

   @HostBinding('class') public get setClassNames() {
      return Rocket.string.trim(this.classNames);
   }

   ngOnInit() {
      this.setColour();
      this.setSize();
      this.setType();
   }

   /**
    * Set the colour of the loader. By default it is set to grey blue.
    */
   private setColour(): void {
      let colourClass: string = SecondaryColour.GREY_BLUE;

      /**
       * Determine if the type is being set.
       */
      if (this.colour && this.colour.length > 0) {
         colourClass = this.colour;
      }
      /**
       * Apply the class name.
       */
      this.classNames += `_colour-${colourClass} `;
   }

   /**
    * Set the size of the loader. By default it is set to default.
    */
   private setSize(): void {
      let sizeClass: string = LoaderSize.DEFAULT;

      /**
       * Determine if the type is being set.
       */
      if (this.size && this.size.length > 0) {
         sizeClass = this.size;
      }
      /**
       * Apply the class name.
       */
      this.classNames += `_size-${sizeClass} `;
   }

   /**
    * Set the type of loader. The options are dots, pulse or spinner. By
    * default it is set to spinner.
    */
   private setType(): void {
      let typeClass: string = LoaderType.SPINNER;

      /**
       * Determine if the type is being set.
       */
      if (this.type && this.type.length > 0) {
         typeClass = this.type;
      }
      /**
       * Apply the class name.
       */
      this.classNames += `_type-${typeClass} `;
   }
}
