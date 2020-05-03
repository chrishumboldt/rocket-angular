/**
 * @author Chris Humboldt
 */

import { moduleMetadata } from '@storybook/angular';

import { RocketConfigModule } from '../../module/config.module';
import { RocketLoaderComponent } from './loader.component';

export default {
  title: 'Rocket Loader',
  decorators: [
    moduleMetadata({
      imports: [RocketConfigModule.forRoot({})],
      declarations: [RocketLoaderComponent],
    }),
  ],
};

/**
 * Rocket layout stories.
 */
export const DefaultLoaders = () => ({
  template: `
    <rocket-loader></rocket-loader>
    <rocket-loader type="pulse"></rocket-loader>
    <rocket-loader type="dots"></rocket-loader>
  `,
});
export const LoaderWithText = () => ({
  template: `<rocket-loader text="I'm Loading"></rocket-loader>`,
});
export const LeftAlignedLoaders = () => ({
  template: `
    <rocket-loader text="I'm Loading" alignment="left"></rocket-loader>
    <rocket-loader text="I'm Loading" alignment="left" type="pulse"></rocket-loader>
    <rocket-loader text="I'm Loading" alignment="left" type="dots"></rocket-loader>
  `,
});
export const SmallLoaders = () => ({
  template: `
    <rocket-loader size="small"></rocket-loader>
    <rocket-loader size="small" type="pulse"></rocket-loader>
    <rocket-loader size="small" type="dots"></rocket-loader>
  `,
});
export const LeftAlignedSmallLoaders = () => ({
  template: `
    <rocket-loader size="small" alignment="left" text="Loading"></rocket-loader>
    <rocket-loader size="small" type="pulse" alignment="left" text="Loading"></rocket-loader>
    <rocket-loader size="small" type="dots" alignment="left" text="Loading"></rocket-loader>
  `,
});
