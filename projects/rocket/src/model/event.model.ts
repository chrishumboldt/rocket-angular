/**
 * @author Chris Humboldt
 */

import { EventAction } from '../store/event.store';

export interface EventParams {
  eventHandler: (event: any) => void;
  selector: string;
  type?: string;
}

export interface EventApplyParams extends EventParams {
  action?: EventAction;
}
