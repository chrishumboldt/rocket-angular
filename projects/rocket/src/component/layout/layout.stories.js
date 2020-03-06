/**
 * @author Chris Humboldt
 */

import { moduleMetadata } from '@storybook/angular';

import { RocketLayoutBodyComponent } from './body/layout-body.component';
import { RocketLayoutRowComponent } from './row/layout-row.component';
import { RocketLayoutSpanComponent } from './span/layout-span.component';

export default {
  title: 'Rocket Layout',
  decorators: [
    moduleMetadata({
      declarations: [
        RocketLayoutBodyComponent,
        RocketLayoutRowComponent,
        RocketLayoutSpanComponent
      ]
    })
  ]
};

/**
 * Rocket body story.
 */
export const Body = () => ({
  template: `<rocket-body>This is a body</rocket-body>`
});

export const BodyLimitLarge = () => ({
  template: `<rocket-body limit="large">This is a body</rocket-body>`
});

export const BodyLimitSmall = () => ({
  template: `<rocket-body limit="small">This is a body</rocket-body>`
});

/**
 * Rocket row story.
 */
export const Row = () => ({
  template: `<rocket-row>This is a row</rocket-row>`
});

/**
 * Rocket span story.
 */
export const Span = () => ({
  template: `<rocket-span width="6">This is a span</rocket-span>`
});

/**
 * The span and row composite example.
 */
export const BodyAsRowWithSpans = () => ({
  template: `
    <rocket-body [row]="true">
      <rocket-span width="4">Span One</rocket-span>
      <rocket-span width="4">Span Two</rocket-span>
      <rocket-span width="4">Span Three</rocket-span>
    </rocket-body>
  `
});
