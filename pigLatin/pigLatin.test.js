const { toPigLatin } = require('./pigLatin');

describe('toPigLatin', () => {
  test('change a lower case string to pig latin', () => {
    const testString = 'the quick brown fox';
    const expected = 'hetay uickqay rownbay oxfay';
    expect(toPigLatin(testString)).toBe(expected);
  });

  test('change a mixed case string to pig latin', () => {
    const testString = 'Sydney or Melbourne or Brisbane are possible destinations';
    const expected = 'ydneySay roay elbourneMay roay risbaneBay reaay ossiblepay estinationsday';
    expect(toPigLatin(testString)).toBe(expected);
  });

  test('change a single letter string to pig latin', () => {
    const testString = 'A';
    const expected = 'Aay';
    expect(toPigLatin(testString)).toBe(expected);
  });

  test('handle an empty string', () => {
    const testString = '';
    const expected = '';
    expect(toPigLatin(testString)).toBe(expected);
  });
});