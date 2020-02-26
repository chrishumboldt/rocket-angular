/**
 * @author Chris Humboldt
 */

import { RocketTransform } from './transform.tool';

describe('Rocket Transform Tool:', () => {
  // Tests.
  it('Should transform bytes into a readable string.', () => {
    expect(RocketTransform.bytes({ bytes: 2000 })).toEqual('2 KB');
    expect(RocketTransform.bytes({ bytes: 30000 })).toEqual('30 KB');
    expect(RocketTransform.bytes({ bytes: 4000000 })).toEqual('4 MB');
    expect(RocketTransform.bytes({ bytes: 8000000000 })).toEqual('8 GB');
    expect(RocketTransform.bytes({ bytes: 1600000000000 })).toEqual('1.6 TB');
    expect(RocketTransform.bytes({ bytes: 3200000000000000 })).toEqual(
      '3.2 PB'
    );
    expect(RocketTransform.bytes({ bytes: 6440000000000000000 })).toEqual(
      '6.44 EB'
    );
    expect(RocketTransform.bytes({ bytes: 88700000000000000000000 })).toEqual(
      '88.7 ZB'
    );
    expect(
      RocketTransform.bytes({ bytes: 46200000000000000000000000 })
    ).toEqual('46.2 YB');
  });
});
