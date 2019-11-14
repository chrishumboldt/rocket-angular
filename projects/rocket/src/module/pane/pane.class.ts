/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../../generator/value.generator';
import { RocketData } from '../../store/data.store';
import { State } from '../../store/state.store';
import { RocketRandom } from '../../tool/random.tool';

export class Pane {
   active: boolean;
   level: number;
   name: string;
   visibility: State;

   constructor(input: any = {}) {
      this.active = ValueGenerator(this, input, 'active', false);
      this.level = ValueGenerator(this, input, 'level', 0);
      this.name = ValueGenerator(this, input, 'name', RocketRandom.string(RocketData.RANDOM_NAME_LENGTH));
      this.visibility = ValueGenerator(this, input, 'visibility', State.HIDDEN);
   }
}
