/**
 * @author Chris Humboldt
 */

import { Injectable, Optional } from '@angular/core';

import { ValueGenerator } from '../../generator/value.generator';
import { DataEntry } from '../../model/data.model';
import { RocketConfig } from '../../model/config.model';
import {
  ButtonShape,
  ButtonSize,
  ButtonRender
} from '../../store/button.store';
import { FormInputType, FormStyle } from '../../store/form.store';
import { LoaderSize, LoaderType } from '../../store/loader.store';
import { ButtonColour } from '../../store/button.store';
import { ColourCode, SecondaryColour } from '../../store/colour.store';
import { State } from '../../store/state.store';
import { SizeType } from '../../store/size.store';
import { StorageType } from '../../store/storage.store';

@Injectable({
  providedIn: 'root'
})
export class RocketConfigService {
  public bodyPadding?: SizeType;
  public buttonColour: ButtonColour;
  public buttonRender: ButtonRender;
  public buttonShape: ButtonShape;
  public buttonSize: ButtonSize;
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

  constructor(@Optional() config: RocketConfig = {}) {
    this.bodyPadding = ValueGenerator({
      data: config && config.bodyPadding,
      fallback: SizeType.MEDIUM
    });
    this.buttonColour = ValueGenerator({
      data: config && config.buttonColour,
      fallback: ButtonColour.BLUE
    });
    this.buttonShape = ValueGenerator({
      data: config && config.buttonShape,
      fallback: ButtonShape.ROUNDED
    });
    this.buttonSize = ValueGenerator({
      data: config && config.buttonSize,
      fallback: ButtonSize.DEFAULT
    });
    this.buttonRender = ValueGenerator({
      data: config && config.buttonRender,
      fallback: ButtonRender.FLAT
    });
    this.font = ValueGenerator({
      data: config && config.font,
      fallback: "'Open Sans', Helvetica, Arial, sans-serif"
    });
    this.formColour = ValueGenerator({
      data: config && config.formColour,
      fallback: ColourCode.BLUE
    });
    this.formInputType = ValueGenerator({
      data: config && config.formInputType,
      fallback: FormInputType.TEXT
    });
    this.formSize = ValueGenerator({
      data: config && config.formSize,
      fallback: SizeType.MEDIUM
    });
    this.formSlideLabel = ValueGenerator({
      data: config && config.formSlideLabel,
      fallback: State.ON
    });
    this.formStyle = ValueGenerator({
      data: config && config.formStyle,
      fallback: FormStyle.LINE
    });
    this.initData = ValueGenerator({
      data: config && config.initData,
      fallback: []
    });
    this.loaderColour = ValueGenerator({
      data: config && config.loaderColour,
      fallback: SecondaryColour.GREY_BLUE
    });
    this.loaderSize = ValueGenerator({
      data: config && config.loaderSize,
      fallback: LoaderSize.DEFAULT
    });
    this.loaderType = ValueGenerator({
      data: config && config.loaderType,
      fallback: LoaderType.SPINNER
    });
    this.paneRenderContentOnActive = ValueGenerator({
      data: config && config.paneRenderContentOnActive,
      fallback: true
    });
    this.paneStartingLevel = ValueGenerator({
      data: config && config.paneStartingLevel,
      fallback: 200
    });
    this.sizeSmall = ValueGenerator({
      data: config && config.sizeSmall,
      fallback: 350
    });
    this.sizeMedium = ValueGenerator({
      data: config && config.sizeMedium,
      fallback: 750
    });
    this.storageName = ValueGenerator({
      data: config && config.storageName,
      fallback: 'RocketStorage'
    });
    this.storageType = ValueGenerator({
      data: config && config.storageType,
      fallback: StorageType.SESSION
    });
  }
}
