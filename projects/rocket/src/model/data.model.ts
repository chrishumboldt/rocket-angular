/**
 * @author Chris Humboldt
 */

import { ValueGenerator } from '../generator/value.generator';
import { ObservableType } from '../store/data.store';
import { SortOrder } from '../store/sort.store';

export class DataEntry {
  asObservable?: boolean;
  data?: any;
  force?: boolean;
  name: string;
  observableType?: ObservableType;
  sortBy?: string;
  sortOrder?: SortOrder;

  constructor(data: any = {}) {
    this.asObservable = ValueGenerator({
      data: data.asObservable,
      fallback: true
    });
    this.data = ValueGenerator({ data: data.data });
    this.force = ValueGenerator({ data: data.force, fallback: false });
    this.name = ValueGenerator({ data: data.name, fallback: '' });
    this.observableType = ValueGenerator({
      data: data.observableType,
      fallback: ObservableType.BEHAVIOR_SUBJECT
    });
    this.sortOrder = ValueGenerator({
      data: data.sortOrder,
      fallback: SortOrder.ASCENDING
    });

    // Optionals.
    if (data.sortBy) {
      this.sortBy = ValueGenerator({ data: this.sortBy });
    }
  }
}

export interface SortDataParams {
  data: any;
  sortBy?: string;
  sortOrder?: SortOrder;
}

export class SubscribeToParams {
  name: any;
  onEmit: any;
  safeEmit?: boolean;

  constructor(data: any = {}) {
    this.name = ValueGenerator({ data: data.name, fallback: '' });
    this.onEmit = ValueGenerator({ data: data.onEmit, fallback: () => {} });
    this.safeEmit = ValueGenerator({ data: data.safeEmit, fallback: true });
  }
}
