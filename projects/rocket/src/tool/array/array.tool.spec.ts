/**
 * @author Chris Humboldt
 */

import { RocketArray } from './array.tool';

describe('Rocket Array Tool:', () => {
  // Tests.
  it('Should clean an array and return values that are declared.', () => {
    const testArray = [undefined, 'Darth Vader', 'Emperor Palpatine', null, ''];

    expect(RocketArray.clean({ data: 'one' })).toEqual([]);

    expect(RocketArray.clean({ data: testArray })).toEqual([
      undefined,
      'Darth Vader',
      'Emperor Palpatine',
      ''
    ]);

    expect(RocketArray.clean({ data: testArray, hardClean: true })).toEqual([
      'Darth Vader',
      'Emperor Palpatine'
    ]);
  });

  it('Should make an array based on the data.', () => {
    const divElm = document.createElement('div');
    const expectedResult = ['Lightsaber', 'Blaster'];

    expect(RocketArray.make({ data: ['Lightsaber', 'Blaster'] })).toEqual(
      expectedResult
    );

    expect(RocketArray.make({ data: 'Lightsaber Blaster' })).toEqual(
      expectedResult
    );

    expect(RocketArray.make({ data: divElm })).toEqual([divElm]);

    expect(
      RocketArray.make({
        data: ['Lightsaber', 'Lightsaber', 'Blaster'],
        unique: true
      })
    ).toEqual(expectedResult);

    expect(
      RocketArray.make({ data: 'Lightsaber Lightsaber Blaster', unique: true })
    ).toEqual(expectedResult);
  });

  it('Should remove an entry from an array.', () => {
    const testArray = ['Darth Vader', 'Darth Maul', 'Darth Sidious'];

    // Remove the entry and test.
    const newArray = RocketArray.remove({
      data: testArray,
      value: 'Darth Maul'
    });

    expect(newArray.length).toEqual(2);
    expect(newArray[0]).toEqual('Darth Vader');
    expect(newArray[1]).toEqual('Darth Sidious');
  });

  it('Should modify an array to only include unique values.', () => {
    const testArray = ['Darth Vader', 'Darth Vader', 'Darth Sidious'];

    // Make the array unique.
    const newArray = RocketArray.unique(testArray);

    expect(newArray.length).toEqual(2);
    expect(newArray[0]).toEqual('Darth Vader');
    expect(newArray[1]).toEqual('Darth Sidious');
  });
});
