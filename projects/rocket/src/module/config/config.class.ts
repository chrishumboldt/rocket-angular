/**
 * @author Chris Humboldt
 */

import { LoaderSize, LoaderType, StorageType } from '../../store';

import { DataEntry } from '../data/data.class';

export class RocketConfig {
   font?: string;
   initData?: DataEntry[];
   loaderColour?: any;
   loaderSize?: LoaderSize;
   loaderType?: LoaderType;
   paneRenderContentOnActive?: boolean;
   paneRenderHeader?: boolean;
   paneStartingLevel?: number;
   responsiveEngine?: boolean;
   sizeSmall?: number;
   sizeMedium?: number;
   storageName?: string;
   storageType?: StorageType;
}
