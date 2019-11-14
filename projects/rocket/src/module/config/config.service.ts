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
      this.font = ValueGenerator(this, config, 'font', '\'Open Sans\', Helvetica, Arial, sans-serif');
      this.initData = ValueGenerator(this, config, 'initData', []);
      this.loaderColour = ValueGenerator(this, config, 'loaderColour', SecondaryColour.GREY_BLUE);
      this.loaderSize = ValueGenerator(this, config, 'loaderSize', LoaderSize.DEFAULT);
      this.loaderType = ValueGenerator(this, config, 'loaderType', LoaderType.SPINNER);
      this.paneRenderContentOnActive = ValueGenerator(this, config, 'paneRenderContentOnActive', true);
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
