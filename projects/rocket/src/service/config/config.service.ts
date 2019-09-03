/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { RocketConfig } from '../../config/config';
import { LoaderSize, LoaderType, SecondaryColour, StorageType } from '../../store';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   public loaderColour: any;
   public loaderSize: LoaderSize;
   public loaderType: LoaderType;
   public storageName: string;
   public storageType: StorageType;

   constructor(
      @Optional() config: RocketConfig
   ) {
      /**
       * If the configuration is available set the values else default to fallbacks.
       */
      this.loaderColour = (config && config.loaderColour) ? config.loaderColour : SecondaryColour.GREY_BLUE;
      this.loaderSize = (config && config.loaderSize) ? config.loaderSize : LoaderSize.DEFAULT;
      this.loaderType = (config && config.loaderType) ? config.loaderType : LoaderType.SPINNER;
      this.storageName = (config && config.storageName) ? config.storageName : 'RocketStorage';
      this.storageType = (config && config.storageType) ? config.storageType : StorageType.SESSION;
   }
}
