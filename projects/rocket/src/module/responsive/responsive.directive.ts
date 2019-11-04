/**
 * @author Chris Humboldt
 *
 * @NOTE that credit needs to be give to https://github.com/vdolek/angular-resize-event
 * which gave a lot of insight into how to manage this.
 */

import {
   Directive,
   ElementRef,
   EventEmitter,
   OnDestroy,
   OnInit,
   Output
} from '@angular/core';
import { ResizeSensor } from 'css-element-queries';

import { Prefix, Size, SizeClasses } from '../../store';
import { RocketClass, RocketDimension, RocketString, RocketTransform } from '../../tool';

@Directive({
   selector: '[rocketResponsive]'
})
export class RocketResponsiveDirective implements OnDestroy, OnInit {
   private resizeSensor: ResizeSensor;
   @Output() rocketResponsive = new EventEmitter();

   constructor(
      private elm: ElementRef
   ) {}

   ngOnInit() {
      this.resizeSensor = new ResizeSensor(this.elm.nativeElement, () => this.resized());
   }

   ngOnDestroy() {
      if (this.resizeSensor) {
         this.resizeSensor.detach();
      }
   }

   /**
    * Manage the resize event. Determine the size and then emit out the values
    * accordingly.
    */
   private resized(): void {
      // let classHeight: string;
      // let classWidth: string;
      // const dimensions = RocketDimension.dimensions(this.elm.nativeElement);
      //
      // /**
      //  * Start by removing all size classes.
      //  */
      // RocketClass.remove(this.elm.nativeElement, SizeClasses.join(' '));
      // /**
      //  * Now determine the correct class size for both height and width.
      //  */
      // this.sizes.forEach((size: any) => {
      //    const keyClass = RocketString.lowercase.all(size.key).replace(' ', '-');
      //    const sizeValue = parseInt(size.value, 10);
      //
      //    if (!classHeight && (sizeValue > dimensions.height)) {
      //       classHeight = `${Prefix.SIZE}h-${keyClass}`;
      //    }
      //    if (!classWidth && (sizeValue > dimensions.width)) {
      //       classWidth = `${Prefix.SIZE}w-${keyClass}`;
      //    }
      // });
      // RocketClass.add(this.elm.nativeElement, `${classHeight} ${classWidth}`);
      /**
       * Emit out the dimensions to a listener.
       */
      this.rocketResponsive.emit(dimensions);
   }
}
