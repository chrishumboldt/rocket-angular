/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { RocketConfig } from '../../config/config.class';
import { DataEntry } from '../data/data-entry.class';
import { LoaderSize, LoaderType, SecondaryColour, StorageType } from '../../store';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   public initData: DataEntry[];
   public loaderColour: string;
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
      this.initData = (config && config.initData) ? config.initData : [];
      this.loaderColour = (config && config.loaderColour) ? config.loaderColour : SecondaryColour.GREY_BLUE;
      this.loaderSize = (config && config.loaderSize) ? config.loaderSize : LoaderSize.DEFAULT;
      this.loaderType = (config && config.loaderType) ? config.loaderType : LoaderType.SPINNER;
      this.storageName = (config && config.storageName) ? config.storageName : 'RocketStorage';
      this.storageType = (config && config.storageType) ? config.storageType : StorageType.SESSION;
   }
}
