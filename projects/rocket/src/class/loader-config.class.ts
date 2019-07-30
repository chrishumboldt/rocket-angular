/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../factory';
import { LoaderSize, LoaderType, SecondaryColour } from '../store';

export class LoaderConfig {
   colour: string;
   size: LoaderSize;
   type: LoaderType;

   constructor(input: any = {}) {
      this.colour = ValueGenerator(this, input, 'colour', SecondaryColour.GREY_BLUE);
      this.size = ValueGenerator(this, input, 'size', LoaderSize.DEFAULT);
      this.type = ValueGenerator(this, input, 'type', LoaderType.SPINNER);
   }
}
