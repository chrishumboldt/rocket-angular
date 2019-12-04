/**
 * @author Chris Humboldt
 */

import { LoaderSize, LoaderType } from '../store/loader.store';
import { StorageType } from '../store/storage.store';
import { DataEntry } from './data.model';

export class RocketConfig {
   font?: string;
   initData?: DataEntry[];
   loaderColour?: any;
   loaderSize?: LoaderSize;
   loaderType?: LoaderType;
   paneRenderContentOnActive?: boolean;
   paneStartingLevel?: number;
   responsiveEngine?: boolean;
   sizeSmall?: number;
   sizeMedium?: number;
   storageName?: string;
   storageType?: StorageType;
}
