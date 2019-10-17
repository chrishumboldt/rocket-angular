/**
 * @author Chris Humboldt
 */

import { DataEntry } from '../service';
import { LoaderSize, LoaderType, StorageType } from '../store';

export class RocketConfig {
   font?: string;
   initData?: DataEntry[];
   loaderColour?: any;
   loaderSize?: LoaderSize;
   loaderType?: LoaderType;
   storageName?: string;
   storageType?: StorageType;
}
