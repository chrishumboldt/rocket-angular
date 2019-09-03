/**
 * @author Chris Humboldt
 */

import { LoaderSize, LoaderType, SecondaryColour, StorageType } from '../store';

export class RocketConfig {
   loaderColour? = SecondaryColour.GREY_BLUE;
   loaderSize? = LoaderSize.DEFAULT;
   loaderType? = LoaderType.SPINNER;
   storageName? = 'RocketStorage';
   storageType? = StorageType.SESSION;
}
