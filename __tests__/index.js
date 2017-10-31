const animals = require('../index');

describe('Dataset', () => {
  it('exports an array', () => {
    expect(Array.isArray(animals)).toBe(true);
  });
});
