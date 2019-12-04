/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { ValueGenerator } from '../../generator/value.generator';
import { DataEntry } from '../../model/data.model';
import { RocketConfig } from '../../model/config.model';
import { LoaderSize, LoaderType } from '../../store/loader.store';
import { SecondaryColour } from '../../store/colour.store';
import { StorageType } from '../../store/storage.store';
import { RocketSetup } from '../../tool/setup/setup.tool';

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
      this.font = ValueGenerator({
         data: config.font,
         fallback: '\'Open Sans\', Helvetica, Arial, sans-serif'
      });
      this.initData = ValueGenerator({
         data: config.initData, fallback: []
      });
      this.loaderColour = ValueGenerator({
         data: config.loaderColour,
         fallback: SecondaryColour.GREY_BLUE
      });
      this.loaderSize = ValueGenerator({
         data: config.loaderSize,
         fallback: LoaderSize.DEFAULT
      });
      this.loaderType = ValueGenerator({
         data: config.loaderType,
         fallback: LoaderType.SPINNER
      });
      this.paneRenderContentOnActive = ValueGenerator({
         data: config.paneRenderContentOnActive,
         fallback: true
      });
      this.paneStartingLevel = ValueGenerator({
         data: config.paneStartingLevel,
         fallback: 200
      });
      this.sizeSmall = ValueGenerator({
         data: config.sizeSmall,
         fallback: 350
      });
      this.sizeMedium = ValueGenerator({
         data: config.sizeMedium,
         fallback: 750
      });
      this.storageName = ValueGenerator({
         data: config.storageName,
         fallback: 'RocketStorage'
      });
      this.storageType = ValueGenerator({
         data: config.storageType,
         fallback: StorageType.SESSION
      });

      /**
       * Setup the application since configuration should always be included.
       */
      RocketSetup(this.font);
   }
}
