/**
 * @author Chris Humboldt
 */

import { ButtonColour, ButtonShape, ButtonSize, ButtonStyle } from '../store/button.store';
import { FormInputType, FormStyle } from '../store/form.store';
import { LoaderSize, LoaderType } from '../store/loader.store';
import { SizeType } from '../store/size.store';
import { State } from '../store/state.store';
import { StorageType } from '../store/storage.store';
import { DataEntry } from './data.model';

export class RocketConfig {
   buttonColour?: ButtonColour;
   buttonShape?: ButtonShape;
   buttonSize?: ButtonSize;
   buttonStyle?: ButtonStyle;
   font?: string;
   formColour?: string;
   formInputType?: FormInputType;
   formSize?: SizeType;
   formSlideLabel?: State;
   formStyle?: FormStyle;
   initData?: DataEntry[];
   loaderColour?: string;
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
