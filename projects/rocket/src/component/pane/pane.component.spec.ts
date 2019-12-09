/**
 * @author Chris Humboldt
 */

import { TestBed, async } from '@angular/core/testing';

import { RocketConfig } from '../../model/config.model';
import { Pane } from '../../model/pane.model';
import { RocketConfigService } from '../../service/config/config.service';
import { RocketPaneService } from '../../service/pane/pane.service';
import { DataName } from '../../store/data.store';
import { State } from '../../store/state.store';
import { RocketPaneComponent } from './pane.component';

describe('Rocket Pane Component:', () => {
   const paneName = 'armPane';
   let rocketConfigService: RocketConfigService;
   let rocketPaneComponent: RocketPaneComponent;
   let rocketPaneService: RocketPaneService;

   // Setup the tests.
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            RocketConfig,
            RocketConfigService,
            RocketPaneComponent,
            RocketPaneService
         ]
      });

      rocketConfigService = TestBed.get(RocketConfigService);
      rocketPaneComponent = TestBed.get(RocketPaneComponent);
      rocketPaneService = TestBed.get(RocketPaneService);
   });

   // Destroy subscriptions after each test.
   afterEach(() => {
      rocketPaneComponent.subscriptionsDestroy();
   });

   // Tests.
   it('Should initialise.', () => {
      expect(rocketPaneComponent).toBeTruthy();
   });

   it('Should correctly set the default configuration of the component.', () => {
      expect(rocketPaneComponent.active).toBe(false);
      expect(rocketPaneComponent.contentActive).toBe(false);
      expect(rocketPaneComponent.level).toEqual(0);
      expect(rocketPaneComponent.name).toBeUndefined();
      expect(rocketPaneComponent.renderContentOnActive).toBe(true);
      expect(rocketPaneComponent.visibility).toBe(State.HIDDEN);
   });

   it('Should subscribe to the pane service and keep pane state.', async(() => {
      rocketPaneComponent.name = paneName;

      // Initialise the component.
      rocketPaneComponent.ngOnInit();

      // Test that the subscription works.
      rocketPaneComponent.subscribeToData({
         name: DataName.PANES,
         onEmit: (panesMap: Map<string, Pane>) => {
            expect(panesMap.size).toEqual(1);
            expect(panesMap.has(paneName)).toBe(true);

            // Test the pane state.
            const thisPane = panesMap.get(paneName);
            expect(thisPane.active).toBe(false);
            expect(thisPane.level).toBe(0);
            expect(thisPane.visibility).toBe(State.HIDDEN);
         }
      });
   }));

   it('Should subscribe to the pane service and change the state to active.', async(() => {
      rocketPaneComponent.name = paneName;

      // Initialise the component.
      rocketPaneComponent.ngOnInit();
      rocketPaneService.activate(paneName);

      // Test that the subscription works.
      rocketPaneComponent.subscribeToData({
         name: DataName.PANES,
         onEmit: (panesMap: Map<string, Pane>) => {
            expect(panesMap.size).toEqual(1);
            expect(panesMap.has(paneName)).toBe(true);

            // Test the pane state.
            const thisPane = panesMap.get(paneName);
            expect(thisPane.active).toBe(true);
            expect(thisPane.level).toBe(rocketConfigService.paneStartingLevel + 1);
            expect(thisPane.visibility).toBe(State.VISIBLE);
         }
      });
   }));
});
