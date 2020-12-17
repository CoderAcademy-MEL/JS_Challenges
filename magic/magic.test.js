const {magicBoolean} = require('./magic');

describe('The Impossible', () => {
  test('value is both true and false', () => {
    expect(magicBoolean == true && magicBoolean == false).toEqual(true);
  });
});