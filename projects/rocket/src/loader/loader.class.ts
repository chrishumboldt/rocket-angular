/**
 * @author Chris Humboldt
 */

import { SecondaryColour } from '../engine/stores';
import { ValueGenerator } from '../engine/value-generator';
import { LoaderSize, LoaderType } from './loader.enum';

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
