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

import { SizeTextClasses } from '../../store';
import { RocketClass, RocketSize } from '../../tool';

import { Size } from './size.class';
import { RocketSizeService } from './size.service';

@Directive({
   selector: '[rocketResizing]'
})
export class RocketResizingDirective implements OnDestroy, OnInit {
   private resizeSensor: ResizeSensor;
   @Output() rocketResizing = new EventEmitter();

   constructor(
      private elm: ElementRef,
      private rocketSize: RocketSizeService
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
      const size: Size = RocketSize.size(this.elm.nativeElement);

      /**
       * Start by removing all size classes.
       */
      RocketClass.remove(this.elm.nativeElement, SizeTextClasses.join(' '));
      /**
       * Get the size classes now based on the size of the element.
       */
      const sizeClasses = this.rocketSize.getSizeClasses(size);
      RocketClass.add(this.elm.nativeElement, `${sizeClasses.height} ${sizeClasses.width}`);
      /**
       * Emit out the dimensions to a listener.
       */
      this.rocketResizing.emit(size);
   }
}
