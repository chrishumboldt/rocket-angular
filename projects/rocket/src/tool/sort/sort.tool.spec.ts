/**
 * @author Chris Humboldt
 */

import { SortOrder } from '../../store/sort.store';
import { RocketSort } from './sort.tool';

describe('Rocket Sort Tool:', () => {
  // Tests.
  it('Should naturally sort an array in the desired direction.', () => {
    const testArray = ['Yoda', 'Darth Vader', 2, 'Luke Skywalker'];
    const resultAsc = [2, 'Darth Vader', 'Luke Skywalker', 'Yoda'];
    const resultDesc = ['Yoda', 'Luke Skywalker', 'Darth Vader', 2];

    expect(RocketSort.array({ data: testArray })).toEqual(resultAsc);

    expect(
      RocketSort.array({ data: testArray, order: SortOrder.ASCENDING })
    ).toEqual(resultAsc);

    expect(
      RocketSort.array({ data: testArray, order: SortOrder.DESCENDING })
    ).toEqual(resultDesc);
  });

  it('Should naturally sort an array of objects by a common field in the desired direction.', () => {
    const testArray = [
      { name: 'Yoda', isJedi: true },
      { name: 'Darth Vader', isJedi: false },
      { name: 'Luke Skywalker', isJedi: true }
    ];
    const resultAsc = [
      { name: 'Darth Vader', isJedi: false },
      { name: 'Luke Skywalker', isJedi: true },
      { name: 'Yoda', isJedi: true }
    ];
    const resultDesc = [
      { name: 'Yoda', isJedi: true },
      { name: 'Luke Skywalker', isJedi: true },
      { name: 'Darth Vader', isJedi: false }
    ];

    expect(RocketSort.array({ data: testArray, by: 'name' })).toEqual(
      resultAsc
    );

    expect(
      RocketSort.array({
        data: testArray,
        by: 'name',
        order: SortOrder.ASCENDING
      })
    ).toEqual(resultAsc);

    expect(
      RocketSort.array({
        data: testArray,
        by: 'name',
        order: SortOrder.DESCENDING
      })
    ).toEqual(resultDesc);
  });

  it('Should naturally sort a map in the desired direction.', () => {
    const testMap = new Map()
      .set(0, 'Yoda')
      .set(1, 'Darth Vader')
      .set(2, 2)
      .set(3, 'Luke Skywalker');

    const resultAsc = new Map()
      .set(2, 2)
      .set(1, 'Darth Vader')
      .set(3, 'Luke Skywalker')
      .set(0, 'Yoda');

    const resultDesc = new Map()
      .set(0, 'Yoda')
      .set(3, 'Luke Skywalker')
      .set(1, 'Darth Vader')
      .set(2, 2);

    expect(RocketSort.map({ data: testMap })).toEqual(resultAsc);

    expect(
      RocketSort.map({ data: testMap, order: SortOrder.ASCENDING })
    ).toEqual(resultAsc);

    expect(
      RocketSort.map({ data: testMap, order: SortOrder.DESCENDING })
    ).toEqual(resultDesc);
  });

  it('Should naturally sort a map of objects by a common field in the desired direction.', () => {
    const testMap = new Map()
      .set(0, { name: 'Yoda', isJedi: true })
      .set(1, { name: 'Darth Vader', isJedi: false })
      .set(2, { name: 'Luke Skywalker', isJedi: true });

    const resultAsc = new Map()
      .set(1, { name: 'Darth Vader', isJedi: false })
      .set(2, { name: 'Luke Skywalker', isJedi: true })
      .set(0, { name: 'Yoda', isJedi: true });

    const resultDesc = new Map()
      .set(0, { name: 'Yoda', isJedi: true })
      .set(2, { name: 'Luke Skywalker', isJedi: true })
      .set(1, { name: 'Darth Vader', isJedi: false });

    expect(RocketSort.map({ data: testMap, by: 'name' })).toEqual(resultAsc);

    expect(
      RocketSort.map({ data: testMap, by: 'name', order: SortOrder.ASCENDING })
    ).toEqual(resultAsc);

    expect(
      RocketSort.map({ data: testMap, by: 'name', order: SortOrder.DESCENDING })
    ).toEqual(resultDesc);
  });
});
