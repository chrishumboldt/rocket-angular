/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { DataEntry } from '../data/data.class';
import { ValueGenerator } from '../../generator/value.generator';
import { LoaderSize, LoaderType } from '../../store/loader.store';
import { SecondaryColour } from '../../store/colour.store';
import { StorageType } from '../../store/storage.store';
import { RocketSetup } from '../../tool/setup.tool';

import { RocketConfig } from './config.class';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   public font: string;
   public initData: DataEntry[];
   public loaderColour: string;
   public loaderSize: LoaderSize;
   public loaderType: LoaderType;
   public paneRenderContentOnActive: boolean;
   public paneStartingLevel: number;
   public sizeSmall: number;
   public sizeMedium: number;
   public storageName: string;
   public storageType: StorageType;

   constructor(
      @Optional() config: RocketConfig = {}
   ) {
      this.font = ValueGenerator({input: config.font, fallback: '\'Open Sans\', Helvetica, Arial, sans-serif'});
      this.initData = ValueGenerator({input: config.initData, fallback: []});
      this.loaderColour = ValueGenerator({input: config.loaderColour, fallback: SecondaryColour.GREY_BLUE});
      this.loaderSize = ValueGenerator({input: config.loaderSize, fallback: LoaderSize.DEFAULT});
      this.loaderType = ValueGenerator({input: config.loaderType, fallback: LoaderType.SPINNER});
      this.paneRenderContentOnActive = ValueGenerator({input: config.paneRenderContentOnActive, fallback: true});
      this.paneStartingLevel = ValueGenerator({input: config.paneStartingLevel, fallback: 200});
      this.sizeSmall = ValueGenerator({input: config.sizeSmall, fallback: 350});
      this.sizeMedium = ValueGenerator({input: config.sizeMedium, fallback: 750});
      this.storageName = ValueGenerator({input: config.storageName, fallback: 'RocketStorage'});
      this.storageType = ValueGenerator({input: config.storageType, fallback: StorageType.SESSION});

      /**
       * Setup the application since configuration should always be included.
       */
      RocketSetup(this.font);
   }
}
