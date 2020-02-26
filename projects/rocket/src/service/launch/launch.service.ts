/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';

import { RocketConfigService } from '../config/config.service';
import { RocketDataService } from '../data/data.service';
import { DataName } from '../../store/data.store';
import { SizeType } from '../../store/size.store';
import { RocketDOM } from '../../tool/dom/dom.tool';
import { RocketEvent } from '../../tool/event/event.tool';
import { RocketIs } from '../../tool/is/is.tool';
import { RocketSetup } from '../../tool/setup/setup.tool';
import { RocketSize } from '../../tool/size/size.tool';

@Injectable({
  providedIn: 'root'
})
export class RocketLaunchService {
  private isBrowser = RocketIs.browser();

  constructor(
    private rocketConfig: RocketConfigService,
    private rocketData: RocketDataService
  ) {}

  /**
   * This method is used to make sure that the setup is executed. It also start up some
   * listeners like window resize and document click.
   */
  public ignition(): void {
    RocketSetup(this.rocketConfig.font);

    /**
     * Start the global click listner that captures every click event that happens
     * on the DOM. Each event is then pushed to an observable data stream that can
     * be subscribe to.
     */
    RocketEvent.add({
      selector: 'document',
      type: 'click',
      eventHandler: (event: PointerEvent) => {
        if (this.isBrowser) {
          this.rocketData.update({
            name: DataName.DOCUMENT_CLICK,
            data: event
          });
        }
      }
    });

    // Set the window size data on first initialisation.
    this.setWindowSizeData(RocketDOM.window);

    // Create a window resize listener and set the size and size text.
    RocketEvent.add({
      selector: 'window',
      type: 'resize',
      eventHandler: (event: any) => {
        this.setWindowSizeData(event.target);
      }
    });
  }

  /**
   * Set the window size data.
   *
   * @param window - The window element.
   */
  private setWindowSizeData(windowElement: Window): void {
    if (this.isBrowser) {
      const sizeValue = RocketSize.width(windowElement);
      let sizeText = SizeType.SMALL;

      // Set the window size value.
      this.rocketData.update({
        name: DataName.WINDOW_SIZE_VALUE,
        data: sizeValue
      });

      // Determine the windows size text.
      if (
        sizeValue > this.rocketConfig.sizeSmall &&
        sizeValue <= this.rocketConfig.sizeMedium
      ) {
        sizeText = SizeType.MEDIUM;
      } else if (sizeValue > this.rocketConfig.sizeMedium) {
        sizeText = SizeType.LARGE;
      }

      if (this.rocketData.get(DataName.WINDOW_SIZE) !== sizeText) {
        this.rocketData.update({ name: DataName.WINDOW_SIZE, data: sizeText });
      }
    }
  }
}
