/**
 * @author Chris Humboldt
 */

import { RocketClone } from './clone.tool';

describe('Rocket Clone Tool:', () => {
  // Tests.
  it('Should clone a value.', () => {
    const testString = 'Clone Trooper';
    const testObject = { name: 'Clone Trooper', originalTrilogy: false };

    let testStringClone = RocketClone({ data: testString });
    let testObjectClone = RocketClone({ data: testObject });

    // A straight clone should yield the same result.
    expect(testStringClone).toEqual(testString);
    expect(testObjectClone).toEqual(testObject);

    /**
     * Lets change a value and test that there is no reference back to the
     * original value.
     */
    testStringClone = 'Stormtrooper';
    testObjectClone.name = 'Stormtrooper';
    testObjectClone.originalTrilogy = true;

    expect(testStringClone === testString).toBeFalsy();
    expect(testObjectClone === testObject).toBeFalsy();
    expect(testString).toEqual('Clone Trooper');
    expect(testStringClone).toEqual('Stormtrooper');
    expect(testObject.name).toEqual('Clone Trooper');
    expect(testObjectClone.name).toEqual('Stormtrooper');
  });

  it('Should clone an object and apply a class.', () => {
    // Declare the class
    class StarWarsTrooper {
      name: string;
      originalTrilogy: boolean;

      constructor(data: any = {}) {
        this.name = data.name;
        this.originalTrilogy = data.originalTrilogy;
      }
    }

    // Declare the variables
    const testTrooper = new StarWarsTrooper({
      name: 'Clone Trooper',
      originalTrilogy: false
    });
    let testTrooperClone = RocketClone({
      data: testTrooper,
      applyClass: StarWarsTrooper
    });

    // Check that the clone is a like of the original value.
    expect(testTrooperClone).toEqual(testTrooper);
    expect(testTrooperClone instanceof StarWarsTrooper).toBeTruthy();

    /**
     * Lets change a value and test that there is no reference back to the
     * original value.
     */
    testTrooperClone.name = 'Stormtrooper';

    expect(testTrooperClone === testTrooper).toBeFalsy();
    expect(testTrooperClone.name).toEqual('Stormtrooper');
  });
});
