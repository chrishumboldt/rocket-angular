/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { RocketConfigService } from '../../service/config/config.service';
import { LoaderSize, LoaderSizeArray, LoaderType } from '../../store/loader.store';

@Component({
   selector: 'rocket-loader',
   templateUrl: './loader.component.html',
   styleUrls: ['./loader.component.scss']
})
export class RocketLoaderComponent implements OnInit {
   private classNames: string[] = [];
   @Input() colour: string;
   @Input() size: LoaderSize;
   @Input() text: string;
   @Input() type: LoaderType;
   public parts: number[] = [];
   // Host bindings
   @HostBinding('class') get getClassNames() {
      return this.classNames.join(' ');
   };
   @HostBinding('style.padding.px')
   @Input() spacing = 40;

   constructor(
      private rocketConfig: RocketConfigService
   ) {}

   ngOnInit() {
      this.setColour();
      this.setSize();
      this.setType();
   }

   /**
    * Set the colour of the loader. By default it is set to grey blue. This has
    * been deliberatly left open ended to allow developers to add a colour in
    * should they see fit.
    */
   private setColour(): void {
      if (this.colour) {
         this.classNames.push(`_colour-${this.colour}`);
      } else {
         this.classNames.push(`_colour-${this.rocketConfig.loaderColour}`);
      }
   }

   /**
    * Set the size of the loader. By default it is set to default.
    */
   private setSize(): void {
      if (this.size && LoaderSizeArray.includes(this.size)) {
         this.classNames.push(`_size-${this.size}`);
      } else {
         this.classNames.push(`_size-${this.rocketConfig.loaderSize}`);
      }
   }

   /**
    * Set the type of loader. The options are dots, pulse or spinner. By
    * default it is set to spinner.
    */
   private setType(): void {
      let typeClass: string = this.rocketConfig.loaderType;

      // Determine if the type is being set.
      if (this.type) {
         typeClass = this.type;
      }

      // Determine the amount of parts required to create the loader.
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
      this.classNames.push(`_type-${typeClass}`);
   }
}
