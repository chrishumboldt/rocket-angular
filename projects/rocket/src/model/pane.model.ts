/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator/value.generator';
import { State } from '../store/state.store';
import { RocketRandom } from '../tool/random/random.tool';

export class Pane {
  active: boolean;
  level: number;
  name: string;
  visibility: State;

  constructor(data: any = {}) {
    this.active = ValueGenerator({ data: data.active, fallback: false });
    this.level = ValueGenerator({ data: data.level, fallback: 0 });
    this.name = ValueGenerator({
      data: data.name,
      fallback: RocketRandom.string({ length: 10 })
    });
    this.visibility = ValueGenerator({
      data: data.visibility,
      fallback: State.HIDDEN
    });
  }
}

export interface PaneStateChangeParams {
  active: boolean;
  name: string;
}
