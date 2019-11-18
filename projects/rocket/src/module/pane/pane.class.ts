/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../../generator/value.generator';
import { State } from '../../store/state.store';
import { RocketRandom } from '../../tool/random.tool';

export class Pane {
   active: boolean;
   level: number;
   name: string;
   visibility: State;

   constructor(input: any = {}) {
      this.active = ValueGenerator({input: input.active, fallback: false});
      this.level = ValueGenerator({input: input.level, fallback: 0});
      this.name = ValueGenerator({input: input.name, fallback: RocketRandom.string({length:10})});
      this.visibility = ValueGenerator({input: input.visibility, fallback: State.HIDDEN});
   }
}
