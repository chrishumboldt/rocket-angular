/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { ValueGenerator } from '../../generator';
import { LoaderSize, LoaderType, SecondaryColour, StorageType } from '../../store';
import { RocketSetup } from '../../tool';

import { RocketConfig } from './config.class';
import { DataEntry } from '../data/data.class';

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
   public paneRenderHeader: boolean;
   public paneStartingLevel: number;
   public sizeSmall: number;
   public sizeMedium: number;
   public storageName: string;
   public storageType: StorageType;

   constructor(
      @Optional() config: RocketConfig = {}
   ) {
      this.font = ValueGenerator(this, config, 'font', '\'Open Sans\', Helvetica, Arial, sans-serif');
      this.initData = ValueGenerator(this, config, 'initData', []);
      this.loaderColour = ValueGenerator(this, config, 'loaderColour', SecondaryColour.GREY_BLUE);
      this.loaderSize = ValueGenerator(this, config, 'loaderSize', LoaderSize.DEFAULT);
      this.loaderType = ValueGenerator(this, config, 'loaderType', LoaderType.SPINNER);
      this.paneRenderContentOnActive = ValueGenerator(this, config, 'paneRenderContentOnActive', true);
      this.paneRenderHeader = ValueGenerator(this, config, 'paneRenderHeader', true);
      this.paneStartingLevel = ValueGenerator(this, config, 'paneStartingLevel', 200);
      this.sizeSmall = ValueGenerator(this, config, 'sizeSmall', 350);
      this.sizeMedium = ValueGenerator(this, config, 'sizeMedium', 750);
      this.storageName = ValueGenerator(this, config, 'storageName', 'RocketStorage');
      this.storageType = ValueGenerator(this, config, 'storageType', StorageType.SESSION);

      /**
       * Setup the application since configuration should always be included.
       */
      RocketSetup(this.font);
   }
}
