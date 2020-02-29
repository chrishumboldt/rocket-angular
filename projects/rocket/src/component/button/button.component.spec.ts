/**
 * @author Chris Humboldt
 */

import { TestBed } from '@angular/core/testing';

import { RocketConfig } from '../../model/config.model';
import { RocketConfigService } from '../../service/config/config.service';
import {
  ButtonSize,
  ButtonShape,
  ButtonRender,
  ButtonType
} from '../../store/button.store';
import { PrimaryColour, MonoColour } from '../../store/colour.store';
import { LoaderSize } from '../../store/loader.store';
import { State } from '../../store/state.store';
import { RocketButtonComponent } from './button.component';

describe('Rocket Button Component:', () => {
  let rocketButton: RocketButtonComponent;

  // Setup the tests.
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RocketConfig, RocketConfigService, RocketButtonComponent]
    });

    rocketButton = TestBed.get(RocketButtonComponent);
    rocketButton.ngOnInit();
  });

  // Tests.
  it('Should initialise.', () => {
    expect(rocketButton).toBeTruthy();
  });

  it('Should set the class member values.', () => {
    expect(rocketButton.clickedState).toBeFalsy();
    expect(rocketButton.colour).toEqual(PrimaryColour.BLUE);
    expect(rocketButton.loaderColour).toEqual(MonoColour.WHITE);
    expect(rocketButton.loaderSize).toEqual(LoaderSize.SMALL);
    expect(rocketButton.shape).toEqual(ButtonShape.ROUNDED);
    expect(rocketButton.size).toEqual(ButtonSize.DEFAULT);
    expect(rocketButton.state).toEqual(State.ACTIVE);
    expect(rocketButton.render).toEqual(ButtonRender.FLAT);
    expect(rocketButton.text).toEqual('Button');
    expect(rocketButton.type).toEqual(ButtonType.BUTTON);
  });

  it('Should have the correct classes.', () => {
    const classNames = rocketButton.getClassNames.split(' ');

    expect(classNames.includes(`_colour-${rocketButton.colour}`)).toBeTruthy();
    expect(classNames.includes(`_shape-${rocketButton.shape}`)).toBeTruthy();
    expect(classNames.includes(`_size-${rocketButton.size}`)).toBeTruthy();
    expect(classNames.includes(`_render-${rocketButton.render}`)).toBeTruthy();
  });
});
