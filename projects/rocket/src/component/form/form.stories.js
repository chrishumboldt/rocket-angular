/**
 * @author Chris Humboldt
 */

import { moduleMetadata } from '@storybook/angular';

import { RocketConfigService } from '../../service/config/config.service';
import { RocketArrowComponent } from '../arrow/arrow.component';
import { RocketFormElementComponent } from './element/form-element.component';
import { RocketFormInputComponent } from './input/form-input.component';
import { RocketFormSelectComponent } from './select/form-select.component';
import { RocketFormSlideLabelComponent } from './slide-label/form-slide-label.component';
import { RocketFormTextAreaComponent } from './text-area/form-text-area.component';
import { RocketLineRevealComponent } from '../line-reveal/line-reveal.component';

export default {
  title: 'Rocket Form',
  decorators: [
    moduleMetadata({
      declarations: [
        RocketArrowComponent,
        RocketFormElementComponent,
        RocketFormInputComponent,
        RocketFormSelectComponent,
        RocketFormSlideLabelComponent,
        RocketFormTextAreaComponent,
        RocketLineRevealComponent
      ],
      providers: [RocketConfigService]
    })
  ]
};

/**
 * Stories
 */
export const input = () => ({
  component: RocketFormInputComponent
});

export const select = () => ({
  component: RocketFormSelectComponent
});

export const textArea = () => ({
  component: RocketFormTextAreaComponent
});
