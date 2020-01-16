/**
 * @author Chris Humboldt
 */

import { EventAction } from '../store/event.store';

export interface EventOptions {
   eventHandler: (event: any) => void;
   selector: string;
   type?: string;
}

export interface EventApplyOptions extends EventOptions {
   action?: EventAction;
}
