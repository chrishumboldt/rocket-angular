/**
 * @author Chris Humboldt
 */

import {
   Component,
   HostBinding,
   HostListener,
   Input,
   OnDestroy,
   OnInit
} from '@angular/core';

import { DataName, State, SlideFromRightTrigger } from '../../store';

import { RocketConfigService } from '../config/config.service';
import { RocketDataService } from '../data/data.service';
import { RocketHelper } from '../helper/helper.class';
import { Pane } from './pane.class';
import { RocketPaneService } from './pane.service';

@Component({
   selector: 'rocket-pane',
   templateUrl: './pane.component.html',
   styleUrls: ['./pane.component.scss'],
   animations: [SlideFromRightTrigger]
})
export class RocketPaneComponent extends RocketHelper implements OnDestroy, OnInit {
   public active = false;
   public contentActive = false;
   @HostBinding('style.zIndex') level = 0;
   @Input() name: string;
   @Input() renderContentOnActive = this.rocketConfig.paneRenderContentOnActive;
   @HostBinding('style.visibility') visibility = State.HIDDEN;

   constructor(
      private rocketConfig: RocketConfigService,
      public rocketData: RocketDataService,
      private rocketPane: RocketPaneService
   ) {
      super(rocketData);
   }

   ngOnInit() {
      this.rocketPane.register(this.name);
      this.subToPanesData();
   }

   ngOnDestroy() {
      this.rocketPane.deregister(this.name);
      this.subscriptionsDestroy();
   }

   /**
    * Manage the animations that take effect based on state.
    */
   @HostBinding('@slideFromRight') get animationActive() {
      return this.active;
   }
   @HostListener('@slideFromRight.done') onAnimationEnd() {
      if (!this.active) {
         this.contentActive = false;
         this.level = 0;
         this.visibility = State.HIDDEN;
      }
   }

   /**
    * Subscribe to the panes observable data.
    */
   private subToPanesData(): void {
      this.subscribeToData({
         name: DataName.PANES,
         onEmit: (panesMap: Map<string, Pane>) => {
            /**
             * Set the pane values for this component should it be available.
             */
            if (panesMap.has(this.name)) {
               const thisPane = panesMap.get(this.name);

               this.active = thisPane.active;
               /**
                * Since these values are being set right away in the service, this
                * will cause an issue for the presentation on inactive. We actually
                * need the pane to "disappear" with an animation before setting the
                * z-index and visibility and so we will wait for the animation to
                * end before "hidding" this component.
                *
                * As such only set these values on active state and on animation end,
                * chich is managed elsewhere in this class.
                */
               if (this.active) {
                  this.contentActive = thisPane.active;
                  this.level = thisPane.level;
                  this.visibility = thisPane.visibility;
               }
            }
         }
      });
   }
}
