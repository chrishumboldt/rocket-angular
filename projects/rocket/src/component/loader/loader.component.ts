/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { RocketConfigService } from '../../service/config/config.service';
import { LoaderSize, LoaderType } from '../../store/loader.store';

@Component({
   selector: 'rocket-loader',
   templateUrl: './loader.component.html',
   styleUrls: ['./loader.component.scss']
})
export class RocketLoaderComponent implements OnInit {
   @Input() colour: string;
   @Input() size: LoaderSize;
   @Input() text: string;
   @Input() type: LoaderType;
   private classNames = '';
   @HostBinding('class') public get getClassNames() {
      return this.classNames.trim();
   }
   public parts: number[] = [];

   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   ngOnInit() {
      this.setColour();
      this.setSize();
      this.setType();
   }

   /**
    * Set the colour of the loader. By default it is set to grey blue.
    */
   private setColour(): void {
      let colourClass: string = this.rocketConfig.loaderColour;

      // Determine if the type is being set.
      if (this.colour && this.colour.length > 0) {
         colourClass = this.colour;
      }
      // Apply the class name.
      this.classNames += `_colour-${colourClass} `;
   }

   /**
    * Set the size of the loader. By default it is set to default.
    */
   private setSize(): void {
      let sizeClass: string = this.rocketConfig.loaderSize;

      // Determine if the type is being set.
      if (this.size && this.size.length > 0) {
         sizeClass = this.size;
      }
      // Apply the class name.
      this.classNames += `_size-${sizeClass} `;
   }

   /**
    * Set the type of loader. The options are dots, pulse or spinner. By
    * default it is set to spinner.
    */
   private setType(): void {
      let typeClass: string = this.rocketConfig.loaderType;

      // Determine if the type is being set.
      if (this.type && this.type.length > 0) {
         typeClass = this.type;
      }
      // Determine the amount of types.
      switch (typeClass) {
         case LoaderType.DOTS:
            this.parts = [1, 2, 3];
            break;

         case LoaderType.PULSE:
            this.parts = [1, 2];
            break;

         default:
            // Fallback the type class just in case the data is odd.
            this.parts = [1];
            typeClass = LoaderType.SPINNER;
      }
      // Apply the class name.
      this.classNames += `_type-${typeClass} `;
   }
}
