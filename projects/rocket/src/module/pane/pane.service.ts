/**
 * @author Chris Humboldt
 */

import { Injectable } from '@angular/core';

import { RocketConfigService } from '../config/config.service';
import { RocketDataService } from '../data/data.service';
import { DataName } from '../../store/data.store';
import { Prefix } from '../../store/prefix.store';
import { State } from '../../store/state.store';

import { Pane } from './pane.class';
import { PaneStateChangeOptions } from './pane.interface';

@Injectable({
   providedIn: 'root'
})
export class RocketPaneService {
   /**
    * The last active pane will carry this determined level (z-index). The ultimate
    * value is derived by adding this value to the pane starting level.found in
    * the config service.
    */
   private activePaneLevel = 0;

   constructor(
      private rocketConfig: RocketConfigService,
      private rocketData: RocketDataService
   ) {}

   /**
    * Activate a pane which will give it a new level on the DOM.
    *
    * @param name - The unique name of the pane.
    */
   public activate(name: string): void {
      if (name) {
         this.changeState({name, active: true});
      }
   }

   /**
    * Change the state of a pane component.
    *
    * @param options - The deconstructed options object.
    * @param options.active - The active state.
    * @param options.name - The name of the pane.
    */
   public changeState({active = false, name}: PaneStateChangeOptions): void {
      const panes = this.getPanes();

      /**
       * Make sure that the pane exists. If not then just move along, Obi-wan style.
       */
      if (panes.has(name)) {
         const namedPane = panes.get(name);

         namedPane.active = active;
         /**
          * Since we have found the pane the activation and deactivation will
          * determine the new level for all the panes.
          */
         if (active) {
            this.activePaneLevel++;
            namedPane.level = this.rocketConfig.paneStartingLevel + this.activePaneLevel;
            namedPane.visibility = State.VISIBLE;
         } else {
            namedPane.level = 0;
            namedPane.visibility = State.HIDDEN;

            /**
             * Now if we are deactivating the highest level pane then we need to
             * decrement the active pane level to the highest active value, else
             * reset it.
             */
            let newActivePaneLevel = 0;

            if (panes.size > 1) {
               for (let pane of panes.values()) {
                  if (pane.active && pane.level > newActivePaneLevel) {
                     newActivePaneLevel = pane.level;
                  }
               }
            }

            this.activePaneLevel = newActivePaneLevel;
         }
         /**
          * Update the panes data.
          */
         this.updatePanes(panes);
      } else {
         console.log(`${Prefix.LOG} A pane with the name "${name}" cannot be found thus the active state cannot be updated.`);
      }
   }

   /**
    * Deactivate a pane component.
    *
    * @param name - The unique name of the pane.
    */
   public deactivate(name: string): void {
      if (name) {
         this.changeState({name, active: false});
      }
   }

   /**
    * Deactivate all panes.
    */
   public deactivateAll(): void {
      const panes = this.getPanes();

      if (panes.size > 0) {
         /**
          * Iterate over the panes and change the active state of all to false.
          */
         for (let pane of panes.values()) {
            pane.active = false;
         }

         /**
          * Update the data.
          */
         this.updatePanes(panes);
         this.activePaneLevel = 0;
      }
   }

   /**
    * Register a pane from the data service.
    *
    * @param name - The unique name of the pane.
    */
   public deregister(name: string): void {
      const panes = this.getPanes();

      if (name && panes.has(name)) {
         panes.delete(name);
         this.updatePanes(panes);
      }
   }

   /**
    * Get the panes map from the data service.
    */
   private getPanes(): Map<string, Pane> {
      const panes = this.rocketData.get(DataName.PANES);
      return (panes) ? panes : new Map();
   }

   /**
    * Register a new pane component within this service. A pane needs to be registered
    * in order to be managed (activated or deactivated).
    *
    * @param name - The new pane name to register.
    */
   public register(name: string): Pane {
      const panes = this.getPanes();

      /**
       * Make sure that a pane with that name does not already exist.
       */
      if (!panes.has(name)) {
         const newPane = new Pane({name});

         panes.set(newPane.name, newPane);
         this.updatePanes(panes);

         return newPane;
      } else {
         console.log(`${Prefix.LOG} A pane with the name "${name}" already exists.`);
      }
   }

   /**
    * Toggle the active state of a pane.
    *
    * @param name - The name of the pane to toggle.
    */
   public toggle(name: string): void {
      const panes = this.getPanes();

      if (panes.has(name)) {
         this.changeState({
            name,
            active: !panes.get(name).active
         });
      }
   }

   /**
    * Updates the panes observable data.
    *
    * @param panes - The panes data to update.
    */
   private updatePanes(panes: Map<string, Pane>): void {
      if (panes) {
         this.rocketData.update({name: DataName.PANES, data: panes});
      }
   }
}
