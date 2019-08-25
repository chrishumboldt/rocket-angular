/**
 * @author Chris Humboldt
 */

import { Extension, ImageExtension } from '../store';

/**
 * Export out an extensions list.
 */
export const extensionList = Object.keys(Extension).map((key: string) => {
   return Extension[key];
});

/**
 * Export out an image extensions list.
 */
export const imageExtensionList = Object.keys(ImageExtension).map((key: string) => {
   return ImageExtension[key];
});
