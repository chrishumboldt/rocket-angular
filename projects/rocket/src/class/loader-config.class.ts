/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator';
import { LoaderSize, LoaderType, SecondaryColour } from '../store';

export class LoaderConfig {
   colour: string;
   size: LoaderSize;
   type: LoaderType;

   /**
    * @param input - The arguments object.
    */
   constructor(input: any = {}) {
      this.colour = ValueGenerator(this, input, 'colour', SecondaryColour.GREY_BLUE);
      this.size = ValueGenerator(this, input, 'size', LoaderSize.DEFAULT);
      this.type = ValueGenerator(this, input, 'type', LoaderType.SPINNER);
   }
}
