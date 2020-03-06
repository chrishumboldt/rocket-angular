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
  component: RocketLayoutBodyComponent,
  template: `<rocket-body row="off">This is a body</rocket-body>`
});

export const BodyLimitLarge = () => ({
  component: RocketLayoutBodyComponent,
  props: {
    size: 'large'
  },
  template: `<rocket-body [limit]="size">This is a body</rocket-body>`
});

export const BodyLimitSmall = () => ({
  component: RocketLayoutBodyComponent,
  props: {
    size: 'small'
  },
  template: `<rocket-body [limit]="size">This is a body</rocket-body>`
});

/**
 * Rocket row story.
 */
export const Row = () => ({
  component: RocketLayoutRowComponent,
  template: `<rocket-row>This is a row</rocket-row>`
});

/**
 * Rocket span story.
 */
export const Span = () => ({
  component: RocketLayoutSpanComponent,
  template: `<rocket-span>This is a span</rocket-span>`
});

/**
 * The span and row composite example.
 */
export const BodyAsRowAndSpan = () => ({
  template: `
    <rocket-body [row]="true">
      <rocket-span>Span One</rocket-span>
      <rocket-span>Span Two</rocket-span>
      <rocket-span>Span Three</rocket-span>
    </rocket-body>
  `
});

/*
storiesOf('Layout', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        RocketLayoutBodyComponent,
        RocketRowComponent,
        RocketSpanComponent
      ]
    })
  )
  .add('Body', () => ({
    component: RocketLayoutBodyComponent,
    template: `<rocket-body>This is a body</rocket-body>`
  }))
  .add('Row', () => ({
    component: RocketRowComponent,
    template: `<rocket-row>This is a row.</rocket-row>`
  }));
  */
