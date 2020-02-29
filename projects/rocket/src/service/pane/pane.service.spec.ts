/**
 * @author Chris Humboldt
 */

import { TestBed } from '@angular/core/testing';

import { Pane } from '../../model/pane.model';
import { DataName } from '../../store/data.store';
import { RocketConfig } from '../../model/config.model';
import { RocketConfigService } from '../config/config.service';
import { RocketDataService } from '../data/data.service';
import { RocketPaneService } from './pane.service';

describe('Rocket Pane Service:', () => {
  const paneName = 'armPane';
  let rocketDataService: RocketDataService;
  let rocketPaneService: RocketPaneService;

  // Setup each test.
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RocketConfig,
        RocketConfigService,
        RocketDataService,
        RocketPaneService
      ]
    });

    rocketDataService = TestBed.get(RocketDataService);
    rocketPaneService = TestBed.get(RocketPaneService);
    rocketPaneService.register(paneName);
  });

  // Tests.
  it('Should initialise.', () => {
    expect(rocketPaneService).toBeTruthy();
  });

  it('Should be successfully registered.', () => {
    const panes: Map<string, Pane> = rocketDataService.get(DataName.PANES);

    expect(panes.size).toEqual(1);
    expect(panes.get(paneName)).toBeTruthy();
  });

  it('Should activate and then deactivate a pane.', () => {
    const panes: Map<string, Pane> = rocketDataService.get(DataName.PANES);
    expect(panes.get(paneName)).toBeTruthy();

    rocketPaneService.activate(paneName);
    expect(panes.get(paneName).active).toBe(true);

    rocketPaneService.deactivate(paneName);
    expect(panes.get(paneName).active).toBe(false);
  });

  it('Should toggle a pane state.', () => {
    const panes: Map<string, Pane> = rocketDataService.get(DataName.PANES);
    expect(panes.get(paneName)).toBeTruthy();

    rocketPaneService.toggle(paneName);
    expect(panes.get(paneName).active).toBe(true);

    rocketPaneService.toggle(paneName);
    expect(panes.get(paneName).active).toBe(false);
  });

  it('Should deactivate all panes.', () => {
    const paneNameOther = 'severedArm';
    const panes: Map<string, Pane> = rocketDataService.get(DataName.PANES);

    // Add in a second pane and activate both.
    rocketPaneService.register(paneNameOther);
    rocketPaneService.activate(paneName);
    rocketPaneService.activate(paneNameOther);

    // Check the state is active first.
    expect(panes.get(paneName).active).toBe(true);
    expect(panes.get(paneNameOther).active).toBe(true);

    // Now deactivate all and test.
    rocketPaneService.deactivateAll();

    expect(panes.get(paneName).active).toBe(false);
    expect(panes.get(paneNameOther).active).toBe(false);
  });
});
