/**
 * @author Chris Humboldt
 */

import { Component, Input } from '@angular/core';

import { ChangeBorderTrigger } from '../../../store/animation.store';
import { RocketFormElementComponent } from '../element/form-element.component';

@Component({
  selector: 'rocket-select',
  templateUrl: './form-select.component.html',
  styleUrls: [
    '../style/setup.scss',
    '../style/select.scss',
    '../style/slide-label.scss'
  ],
  animations: [ChangeBorderTrigger]
})
export class RocketFormSelectComponent extends RocketFormElementComponent {
  @Input() bodyKey = 'body';
  @Input() label: string;
  @Input() options: any[] = [];
  @Input() valueKey = 'value';
}
