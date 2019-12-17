/**
 * @author Chris Humboldt
 */

import { FormInputType, FormStyle } from '../store/form.store';
import { LoaderSize, LoaderType } from '../store/loader.store';
import { SizeText } from '../store/size.store';
import { StorageType } from '../store/storage.store';
import { DataEntry } from './data.model';

export class RocketConfig {
   font?: string;
   formColour?: string;
   formInputType?: FormInputType;
   formSize?: SizeText;
   formStyle?: FormStyle;
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
