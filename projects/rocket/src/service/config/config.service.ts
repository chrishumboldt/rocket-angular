/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { ValueGenerator } from '../../generator/value.generator';
import { DataEntry } from '../../model/data.model';
import { RocketConfig } from '../../model/config.model';
import { ButtonShape, ButtonSize, ButtonStyle } from '../../store/button.store';
import { FormInputType, FormStyle } from '../../store/form.store';
import { LoaderSize, LoaderType } from '../../store/loader.store';
import { ButtonColour } from '../../store/button.store';
import { ColourCode, SecondaryColour } from '../../store/colour.store';
import { State } from '../../store/state.store';
import { SizeType } from '../../store/size.store';
import { StorageType } from '../../store/storage.store';
import { RocketSetup } from '../../tool/setup/setup.tool';

@Injectable({
   providedIn: 'root'
})
export class RocketConfigService {
   public buttonColour: ButtonColour;
   public buttonShape: ButtonShape;
   public buttonSize: ButtonSize;
   public buttonStyle: ButtonStyle;
   public font: string;
   public formColour: string;
   public formInputType: FormInputType;
   public formSize: SizeType;
   public formSlideLabel: State;
   public formStyle: FormStyle;
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
      this.buttonColour = ValueGenerator({
         data: config.buttonColour, fallback: ButtonColour.BLUE
      });
      this.buttonShape = ValueGenerator({
         data: config.buttonShape, fallback: ButtonShape.ROUNDED
      });
      this.buttonSize = ValueGenerator({
         data: config.buttonSize, fallback: ButtonSize.DEFAULT
      });
      this.buttonStyle = ValueGenerator({
         data: config.buttonStyle, fallback: ButtonStyle.FLAT
      });
      this.font = ValueGenerator({
         data: config.font,
         fallback: '\'Open Sans\', Helvetica, Arial, sans-serif'
      });
      this.formColour = ValueGenerator({
         data: config.formColour, fallback: ColourCode.BLUE
      });
      this.formInputType = ValueGenerator({
         data: config.formInputType, fallback: FormInputType.TEXT
      });
      this.formSize = ValueGenerator({
         data: config.formSize, fallback: SizeType.MEDIUM
      });
      this.formSlideLabel = ValueGenerator({
         data: config.formSlideLabel, fallback: State.ON
      });
      this.formStyle = ValueGenerator({
         data: config.formStyle, fallback: FormStyle.LINE
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
   }

   /**
    * This method is used to make sure that non-component configuration is always executed
    * even in the absense of any component initialisations.
    */
   public initialise(): void {
      RocketSetup(this.font);
   }
}
