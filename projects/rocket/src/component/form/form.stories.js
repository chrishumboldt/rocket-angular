/**
 * @author Chris Humboldt
 */

import { moduleMetadata } from '@storybook/angular';

import { RocketConfigModule } from '../../module/config.module';
import { RocketCoreModule } from '../../module/core.module';
import { RocketFormElementComponent } from './element/form-element.component';
import { RocketFormInputComponent } from './input/form-input.component';
import { RocketFormSelectComponent } from './select/form-select.component';
import { RocketFormSlideLabelComponent } from './slide-label/form-slide-label.component';
import { RocketFormTextAreaComponent } from './text-area/form-text-area.component';

export default {
  title: 'Rocket Form',
  decorators: [
    moduleMetadata({
      imports: [RocketConfigModule.forRoot({}), RocketCoreModule],
      declarations: [
        RocketFormElementComponent,
        RocketFormInputComponent,
        RocketFormSelectComponent,
        RocketFormSlideLabelComponent,
        RocketFormTextAreaComponent,
      ],
    }),
  ],
};

/**
 * Stories
 */
export const input = () => ({
  component: RocketFormInputComponent,
});

export const select = () => ({
  component: RocketFormSelectComponent,
});

export const textArea = () => ({
  component: RocketFormTextAreaComponent,
});
