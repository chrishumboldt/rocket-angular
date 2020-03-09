/**
 * @author Chris Humboldt
 */

import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { RocketConfigService } from '../../../service/config/config.service';

@Component({
  selector: 'rocket-spacer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-spacer.component.scss']
})
export class RocketLayoutSpacerComponent implements OnInit {
  @Input() size;
  @HostBinding('class') get classNames() {
    return `_size-${this.size}`;
  }

  constructor(private rocketConfig: RocketConfigService) {}

  ngOnInit() {
    if (!this.size) {
      this.size = this.rocketConfig.bodyPadding
        ? this.rocketConfig.bodyPadding
        : 'medium';
    }
  }
}
