/**
 * @author Chris Humboldt
 */

import { RocketHas } from './has.tool';

describe('Rocket Has Tool:', () => {
  // Tests.
  it('Should have a class.', () => {
    const className = 'theDeathStar';
    const elm = document.createElement('div');
    elm.className = className;

    expect(RocketHas.class({ check: elm, has: className })).toBeTruthy();
  });

  it('Should have a valid extension.', () => {
    const checkString = 'filename.pdf';

    expect(RocketHas.extension({ check: checkString })).toBeTruthy();
  });

  it('Should successfully test the spaces in a string.', () => {
    expect(RocketHas.spaces('This has spaces!')).toBeTruthy();
    expect(RocketHas.spaces('ThisDoesNotHaveSpaces!')).toBeFalsy();
  });
});
